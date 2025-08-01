import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // TODO: verify signature and process payment
  return NextResponse.json({ received: true });
}
