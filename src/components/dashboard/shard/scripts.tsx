'use client';

import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      <Script src="/template/plugins/jquery/jquery.min.js" />
      <Script src="/template/plugins/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="/template/plugins/chart.js/Chart.bundle.min.js" />
      <Script src="/template/plugins/ionicons/ionicons.js" />
      <Script src="/template/plugins/moment/moment.js" />
      <Script src="/template/plugins/jquery-sparkline/jquery.sparkline.min.js" />
      <Script src="/template/plugins/raphael/raphael.min.js" />
      <Script src="/template/plugins/jquery.flot/jquery.flot.js" />
      <Script src="/template/plugins/jquery.flot/jquery.flot.pie.js" />
      <Script src="/template/plugins/jquery.flot/jquery.flot.resize.js" />
      <Script src="/template/plugins/jquery.flot/jquery.flot.categories.js" />
      <Script src="/template/js/dashboard.sampledata.js" />
      <Script src="/template/js/chart.flot.sampledata.js" />
      <Script src="/template/plugins/mscrollbar/jquery.mCustomScrollbar.concat.min.js" />
      <Script src="/template/js/apexcharts.js" />
      <Script src="/template/plugins/rating/jquery.rating-stars.js" />
      <Script src="/template/plugins/rating/jquery.barrating.js" />
      <Script src="/template/plugins/perfect-scrollbar/perfect-scrollbar.min.js" />
      <Script src="/template/plugins/perfect-scrollbar/p-scroll.js" />
      <Script src="/template/js/eva-icons.min.js" />
      <Script src="/template/plugins/sidebar/sidebar.js" />
      <Script src="/template/plugins/sidebar/sidebar-custom.js" />
      <Script src="/template/js/sticky.js" />
      <Script src="/template/js/modal-popup.js" />
      <Script src="/template/plugins/side-menu/sidemenu.js" />
      <Script src="/template/plugins/jqvmap/jquery.vmap.min.js" />
      <Script src="/template/plugins/jqvmap/maps/jquery.vmap.usa.js" />
      <Script src="/template/js/index.js" />
      <Script src="/template/js/apexcharts.js" />
      <Script src="/template/js/custom.js" />
      <Script src="/template/js/jquery.vmap.sampledata.js" />
      
      {/* External CDN scripts */}
      <Script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" />
    </>
  );
}
