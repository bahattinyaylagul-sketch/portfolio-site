/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Edge caching headers to improve TTFB
    // Bu ayar, içeriğin CDN/Edge seviyesinde 60 saniye önbelleğe alınmasını ve
    // arka planda stale-while-revalidate ile yenilenmesini sağlar.
    response.headers.set(
        "Cache-Control",
        "public, s-maxage=60, stale-while-revalidate=3600"
    );

    return response;
}

export const config = {
    // Edge caching'in sadece belirli yollarda uygulanmasını sağlar.
    // API route'ları ve statik dosyalar kapsam dışı bırakılır.
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|icon.png).*)",
    ],
};
