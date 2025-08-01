import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: return subscriptions
  return NextResponse.json({ subscriptions: [] });
}
