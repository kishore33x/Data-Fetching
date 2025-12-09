import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: "success",
    users: 120,
    revenue: 4500
  });
}
