import { NextResponse } from 'next/server';

// Handler for GET method
export const GET = async (request, context) => {
  return NextResponse.json({ message: 'GET' });
}

// Handler for POST method
export const POST = async (request, context) => {
  const body = await request.json();
  return NextResponse.json({ message: 'POST', body: body });
}

// Handler for PUT method
export const PUT = async (request, context) => {
  return NextResponse.json({ message: 'PUT' });
}

// Handler for DELETE method
export const DELETE = async (request, context) => {
  return NextResponse.json({ message: 'DELETE' });
}