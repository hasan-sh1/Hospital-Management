'use client';

import Head from 'next/head';
import Script from 'next/script';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="UTF-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0' />
        <title>Hospital Management System</title>

        {/* Favicon */}
        <link rel="icon" href="/template/img/brand/favicon.png" type="image/x-icon"/>

        {/* Icons css */}
        <link href="/template/plugins/icons/icons.css" rel="stylesheet"/>

        {/* Bootstrap css */}
        <link href="/template/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

        {/* Style css */}
        <link href="/template/css/style.css" rel="stylesheet"/>
        <link href="/template/css/dark-theme.css" rel="stylesheet"/>
        <link href="/template/css/transparent-theme.css" rel="stylesheet"/>
        <link href="/template/css/skin-modes.css" rel="stylesheet"/>

        {/* Animations css */}
        <link href="/template/css/animate.css" rel="stylesheet"/>
      </head>
      <body className="ltr main-body app sidebar-mini">
        {/* Loader */}
        <div id="global-loader">
          <img src="/template/img/loader.svg" className="loader-img" alt="Loader" />
        </div>

        {children}

        {/* JQuery min js */}
        <Script src="/template/plugins/jquery/jquery.min.js" />

        {/* Bootstrap Bundle js */}
        <Script src="/template/plugins/bootstrap/js/popper.min.js" />
        <Script src="/template/plugins/bootstrap/js/bootstrap.bundle.min.js" />

        {/* Moment js */}
        <Script src="/template/plugins/moment/moment.js" />

        {/* P-scroll js */}
        <Script src="/template/plugins/perfect-scrollbar/perfect-scrollbar.min.js" />
        <Script src="/template/plugins/perfect-scrollbar/p-scroll.js" />

        {/* Rating js*/}
        <Script src="/template/plugins/ratings-2/jquery.star-rating.js" />
        <Script src="/template/plugins/ratings-2/star-rating.js" />

        {/* Custom Scroll bar Js*/}
        <Script src="/template/plugins/mscrollbar/jquery.mCustomScrollbar.concat.min.js" />

        {/* Custom js */}
        <Script src="/template/js/custom.js" />
        
      </body>
    </html>
  );
}