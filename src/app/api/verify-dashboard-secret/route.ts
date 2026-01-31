import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { secret } = await req.json();
    const serverSecret = process.env.NEXT_PUBLIC_DASHBOARD_SECRET;

    if (!serverSecret) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (secret === serverSecret) {
      return NextResponse.json({ authorized: true });
    }

    return NextResponse.json({ authorized: false }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
