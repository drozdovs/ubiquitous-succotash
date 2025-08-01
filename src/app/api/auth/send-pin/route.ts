import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // TODO: send PIN via email
  return NextResponse.json({ ok: true });
}
