import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './globals.scss';
import exampleTheme from '../theme/example';

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    return (
        <AppCacheProvider {...props}>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={exampleTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </AppCacheProvider>
    );
}
