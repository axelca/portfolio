import React from 'react';
import { Helmet } from 'react-helmet';

import seoImage from '@images/johndoe.png';

const SEO_DATA = {
  lang: 'en',
  description: 'Interaction design portfolio',
  title: 'ID Portfolio',
  url: 'https://www.not.yet',
  author: 'Axel Engström <axel@younai.design>',
  keywords: ['Gatsby', 'GraphQL', 'Netlify CMS', 'Interaction', 'Design'],
  twitter: {
    id: '',
    img: seoImage,
  },
  facebook: {
    id: '',
    img: seoImage,
  },
};

const SEO = () => {
  return (
    <Helmet defer={false}>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.facebook.img} />
      <meta property="og:description" content={SEO_DATA.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.twitter.img} />
      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang={SEO_DATA.lang} />
    </Helmet>
  );
};

export default SEO;
