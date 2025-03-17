import AuthProvider from '@/components/providers/AuthProvider';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hospital Management System",
  description: "A modern hospital management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
     
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
   
    
  
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
