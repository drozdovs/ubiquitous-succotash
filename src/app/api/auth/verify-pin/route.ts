import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const { email, pin } = await request.json();
  if (!email || !pin) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.pin) {
    return NextResponse.json({ error: 'Invalid code' }, { status: 400 });
  }

  const valid = await bcrypt.compare(pin, user.pin);
  if (!valid) {
    return NextResponse.json({ error: 'Invalid code' }, { status: 400 });
  }

  await prisma.user.update({ where: { email }, data: { pin: null } });

  const token = jwt.sign(
    { sub: user.id, role: user.role },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: '7d' }
  );

  const res = NextResponse.json({ ok: true });
  res.cookies.set('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
