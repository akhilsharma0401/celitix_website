// app/api/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req) {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip =
        forwardedFor ||
        req.ip ||
        'Unknown';

    return NextResponse.json({ ip });
}
