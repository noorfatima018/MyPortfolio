import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // We proxy the request through the Next.js server to avoid browser CORS issues.
    const response = await fetch("https://formsubmit.co/ajax/noor.fatima.212212@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, error: errorText }, { status: response.status });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Server error" }, { status: 500 });
  }
}
