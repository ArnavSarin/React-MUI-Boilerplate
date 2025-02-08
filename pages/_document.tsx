import * as React from 'react';
import {
    DocumentContext,
    DocumentProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import {
    documentGetInitialProps,
    DocumentHeadTags,
    DocumentHeadTagsProps,
} from '@mui/material-nextjs/v14-pagesRouter';
import exampleTheme, { poppins } from '../theme/example';

export default function MyDocument(
    props: DocumentProps & DocumentHeadTagsProps
) {
    return (
        <Html lang="en" className={poppins.className}>
            <Head>
                {/* PWA primary color */}
                <meta
                    name="theme-color"
                    content={exampleTheme.palette.primary.main}
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="emotion-insertion-point" content="" />
                <DocumentHeadTags {...props} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const finalProps = await documentGetInitialProps(ctx);
    return finalProps;
};
