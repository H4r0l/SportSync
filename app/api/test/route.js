import { NextResponse, NextRequest } from 'next/server';

export async function GET(NextRequest) {
  return NextResponse.json({ message: 'Hello from the API!' });
}