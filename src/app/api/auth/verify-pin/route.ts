import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // TODO: verify PIN
  return NextResponse.json({ ok: true });
}
