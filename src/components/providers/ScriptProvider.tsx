'use client';

import Script from 'next/script';

export default function ScriptProvider() {
  return (
    <>
      {/* JQuery min js */}
      <Script src="/template/plugins/jquery/jquery.min.js" strategy="beforeInteractive" />

      {/* Bootstrap Bundle js */}
      <Script src="/template/plugins/bootstrap/js/popper.min.js" strategy="beforeInteractive" />
      <Script src="/template/plugins/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />

      {/* Moment js */}
      <Script src="/template/plugins/moment/moment.js" strategy="beforeInteractive" />

      {/* P-scroll js */}
      <Script src="/template/plugins/perfect-scrollbar/perfect-scrollbar.min.js" strategy="beforeInteractive" />
      <Script src="/template/plugins/perfect-scrollbar/p-scroll.js" strategy="beforeInteractive" />

      {/* Rating js*/}
      <Script src="/template/plugins/ratings-2/jquery.star-rating.js" strategy="beforeInteractive" />
      <Script src="/template/plugins/ratings-2/star-rating.js" strategy="beforeInteractive" />

      {/* Custom Scroll bar Js*/}
      <Script src="/template/plugins/mscrollbar/jquery.mCustomScrollbar.concat.min.js" strategy="beforeInteractive" />

      {/* Custom js */}
      <Script src="/template/js/custom.js" strategy="beforeInteractive" />
    </>
  );
}