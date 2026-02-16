import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { name, phone, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'SEO Lead <onboarding@resend.dev>', // Default sender for testing with unverified domains
            to: ['bahattin@nextcodecollective.com'],
            subject: 'Yeni SEO Lead – Bahattinyaylagul.com',
            html: `
        <h2>Yeni SEO Başvurusu</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong> ${message || 'Mesaj yok'}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully', data });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
