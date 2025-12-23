import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ secret: 'Next.js is cool' })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ 
    message: 'Data received',
    data: body 
  })
}
