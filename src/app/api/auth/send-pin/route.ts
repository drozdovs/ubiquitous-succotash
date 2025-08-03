import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { sendMail } from '@/lib/mail';

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  const pin = Math.floor(100000 + Math.random() * 900000).toString();
  const hash = await bcrypt.hash(pin, 10);

  await prisma.user.upsert({
    where: { email },
    update: { pin: hash },
    create: { email, pin: hash },
  });

  await sendMail(email, 'Your login code', `Your PIN: ${pin}`);

  return NextResponse.json({ ok: true });
}
