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
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTMI!} />
            <Script
                strategy="lazyOnload"
                src="https://www.stephenhd.com/script.js"
                data-website-id="d0466ac4-cb26-42cc-b5ba-b61c95ef4173"
            />
            <Component {...pageProps} />
        </>
    );
}