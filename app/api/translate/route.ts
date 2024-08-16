import { v2 } from '@google-cloud/translate';
import { NextRequest, NextResponse } from 'next/server';

// Create a single instance of the Translate client
const translate = new v2.Translate({
  key: process.env.GOOGLE_CLOUD_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { text, sourceLang = 'ru', targetLang = 'en' } = await req.json();

    // Translate the text
    const [translation] = await translate.translate(text, {
      from: sourceLang,
      to: targetLang,
    });

    return NextResponse.json({ translation }, { status: 200 });
  } catch (error) {
    console.error('Error translating text:', error);
    return NextResponse.json({ error: 'Translation failed' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'GET method not allowed' }, { status: 405 });
}
