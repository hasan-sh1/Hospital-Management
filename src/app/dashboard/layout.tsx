'use client';

import DashboardHead from '@/components/dashboard/shard/head';
import Loader from '@/components/dashboard/shard/loader';
import Sidebar from '@/components/dashboard/shard/sidebar';
import Navbar from '@/components/dashboard/shard/navbar';
import Footer from '@/components/dashboard/shard/footer';
import Scripts from '@/components/dashboard/shard/scripts';
import { useState } from 'react';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
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
        <link href="/template/css/sidemenu.css" rel="stylesheet"/>

        {/* Animations css */}
        <link href="/template/css/animate.css" rel="stylesheet"/>
      </head>
      <body className="main-body app sidebar-mini ltr">
        <Loader />
        
        <div className="page">
          <div className="page-main">
            <Sidebar />
            
            <div className="main-content app-content">
              <Navbar />
              <div className="container-fluid">
                {children}
              </div>
            </div>
          </div>
          
          <Footer />

          <a href="#top" id="back-to-top">
            <i className="las la-angle-double-up"></i>
          </a>
        </div>

        <Scripts />
      </body>
    </html>
  );
}