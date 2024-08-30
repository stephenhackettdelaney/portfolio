import type { AppProps } from "next/app";
import Head from "next/head";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTMI!} />
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZ36SLVQ"
                    height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
                </iframe>
            </noscript>
            <Component {...pageProps} />
        </>
    );
}