'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Sidebar() {
  const { data: session } = useSession();
  const [userRole, setUserRole] = useState('user');

  return (
    <div className="app-sidebar">
      <aside className="app-sidebar sidebar-scroll">
        <div className="main-sidebar-header active">
          <Link href="/dashboard" className="desktop-logo logo-light active">
            <Image src="/template/img/logo-v.png" className="main-logo" alt="logo" width={120} height={40} />
          </Link>
          <Link href="/dashboard" className="desktop-logo logo-dark active">
            <Image src="/template/img/brand/logo-white.png" className="main-logo dark-theme" alt="logo" width={120} height={40} />
          </Link>
          <Link href="/dashboard" className="logo-icon mobile-logo icon-light active">
            <Image src="/template/img/brand/favicon.png" className="logo-icon" alt="logo" width={40} height={40} />
          </Link>
          <Link href="/dashboard" className="logo-icon mobile-logo icon-dark active">
            <Image src="/template/img/brand/favicon-white.png" className="logo-icon dark-theme" alt="logo" width={40} height={40} />
          </Link>
        </div>
        <div className="main-sidemenu">
          <div className="app-sidebar__user clearfix">
            <div className="dropdown user-pro-body">
              <div>
                <Image 
                  src="/template/img/def.png" 
                  alt="user-img" 
                  className="avatar avatar-xl brround" 
                  width={80} 
                  height={80}
                />
                <span className="avatar-status profile-status bg-green"></span>
              </div>
              <div className="user-info">
                <h4 className="font-weight-semibold mt-3 mb-0">{session?.user?.name || 'Guest'}</h4>
                <span className="mb-0 text-muted">{userRole}</span>
              </div>
            </div>
          </div>
          <ul className="side-menu">
            <li className="side-item side-item-category">Main</li>
            <li className="slide">
              <Link href="/dashboard" className="side-menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" opacity=".3" />
                  <path d="M3 21h8v-6H3v6zm2-4h4v2H5v-2zm-2-4h8v-6H3v6zm2-4h4v2H5v-2zm8 8h8v-6h-8v6zm2-4h4v2h-4v-2zm-2-4h8V3h-8v6zm2-4h4v2h-4V5z" />
                </svg>
                <span className="side-menu__label">Main</span>
                <span className="badge badge-success side-badge">1</span>
              </Link>
            </li>
            
            {userRole === 'super-admin' && (
              <>
                <li className="side-item side-item-category">Authorization</li>
                <li className="slide">
                  <Link href="/users" className="side-menu__item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" opacity=".3" />
                      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                    </svg>
                    <span className="side-menu__label">Users</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="/roles" className="side-menu__item">
                    {/* SVG for Roles */}
                    <span className="side-menu__label">Roles</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="/permissions" className="side-menu__item">
                    {/* SVG for Permissions */}
                    <span className="side-menu__label">Permissions</span>
                  </Link>
                </li>
              </>
            )}
  
            <li className="side-item side-item-category">Management</li>
            <li className="slide">
              <Link href="/bills" className="side-menu__item">
                {/* SVG for Bills */}
                <span className="side-menu__label">Bills</span>
              </Link>
            </li>
            <li className="slide">
              <Link href="/appointments" className="side-menu__item">
                {/* SVG for Appointments */}
                <span className="side-menu__label">Appointments</span>
              </Link>
            </li>
            <li className="slide">
              <Link href="/prescriptions" className="side-menu__item">
                {/* SVG for Prescriptions */}
                <span className="side-menu__label">Prescriptions</span>
              </Link>
            </li>
            <li className="slide">
              <Link href="/medical-records" className="side-menu__item">
                {/* SVG for Medical Records */}
                <span className="side-menu__label">Medical Records</span>
              </Link>
            </li>
            <li className="slide">
              <Link href="/lab-tests" className="side-menu__item">
                {/* SVG for Lab Tests */}
                <span className="side-menu__label">Lab Tests</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
