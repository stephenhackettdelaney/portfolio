import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KZ36SLVQ')` }}>
            </Script>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTMI!} />
            <Script
                strategy="lazyOnload"
                src="https://www.stephenhd.com/script.js"
                data-website-id="d0466ac4-cb26-42cc-b5ba-b61c95ef4173"
            />
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZ36SLVQ"
                height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
            <Component {...pageProps} />
        </>
    );
}