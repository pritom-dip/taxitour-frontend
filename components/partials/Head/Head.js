import React from 'react';
import Head from 'next/head'

const SiteHead = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="../../../favicon.ico" />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" />



        </Head>
    );
};

export default SiteHead;