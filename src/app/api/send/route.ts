/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY bulunamadı!");
        return NextResponse.json({ error: 'Sunucu yapılandırması eksik (RESEND_API_KEY yok)' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { name, phone, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'İletişim Formu <onboarding@resend.dev>', // Doğrulanmamış alan adları için resend varsayılanı
            to: ['bahattin@nextcodecollective.com'],
            subject: 'Yeni İletişim Formu Başvurusu – Bahattinyaylagul.com',
            html: `
        <h2>Yeni Başvuru</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>Telefon / E-posta:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong> ${message || 'Mesaj yok'}</p>
      `,
        });

        if (error) {
            console.error("Resend gönderim hatası:", error);
            return NextResponse.json({ error: error.message || 'Resend error' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully', data });
    } catch (error: any) {
        console.error("Mail gönderilirken sunucu içi hata oluştu:", error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
