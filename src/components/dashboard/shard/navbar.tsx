'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="main-header sticky side-header nav nav-item">
      <div className="container-fluid">
        <div className="main-header-left">
          <div className="responsive-logo">
            <Link href="/dashboard">
              <Image src="/template/img/brand/logo.png" className="logo-1" alt="logo" width={40} height={40} />
            </Link>
            <Link href="/dashboard">
              <Image src="/template/img/brand/logo-white.png" className="dark-logo-1" alt="logo" width={40} height={40} />
            </Link>
            <Link href="/dashboard">
              <Image src="/template/img/brand/favicon.png" className="logo-2" alt="logo" width={40} height={40} />
            </Link>
            <Link href="/dashboard">
              <Image src="/template/img/brand/favicon.png" className="dark-logo-2" alt="logo" width={40} height={40} />
            </Link>
          </div>
          <div className="app-sidebar__toggle" data-toggle="sidebar">
            <a className="open-toggle" href="#"><i className="header-icon fe fe-align-left"></i></a>
            <a className="close-toggle" href="#"><i className="header-icons fe fe-x"></i></a>
          </div>
          <div className="main-header-center ml-3 d-sm-none d-md-none d-lg-block">
            <input 
              className="form-control" 
              placeholder="Search for anything..." 
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn">
              <i className="fas fa-search d-none d-md-block"></i>
            </button>
          </div>
        </div>
        <div className="main-header-right">
          <ul className="nav">
            <li className="">
              <div className="dropdown nav-itemd-none d-md-flex">
                <a href="#" className="d-flex nav-item nav-link pr-0 country-flag1" data-toggle="dropdown"
                  aria-expanded="false">
                  <span className="avatar country-Flag mr-0 align-self-center bg-transparent">
                    <Image src="/template/img/flags/us_flag.jpg" alt="img" width={24} height={24} />
                  </span>
                  <div className="my-auto">
                    <strong className="mr-2 ml-2 my-auto">English</strong>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-left dropdown-menu-arrow">
                  {[
                    { country: 'French', flag: 'french_flag.jpg' },
                    { country: 'Germany', flag: 'germany_flag.jpg' },
                    { country: 'Italy', flag: 'italy_flag.jpg' },
                    { country: 'Russia', flag: 'russia_flag.jpg' },
                    { country: 'Spain', flag: 'spain_flag.jpg' }
                  ].map((item, index) => (
                    <a href="#" className="dropdown-item d-flex" key={index}>
                      <span className="avatar mr-3 align-self-center bg-transparent">
                        <Image src={`/template/img/flags/${item.flag}`} alt="img" width={24} height={24} />
                      </span>
                      <div className="d-flex">
                        <span className="mt-2">{item.country}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <div className="nav nav-item navbar-nav-right ml-auto">
            <div className="nav-link" id="bs-example-navbar-collapse-1">
              <form className="navbar-form" role="search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-btn">
                    <button type="reset" className="btn btn-default">
                      <i className="fas fa-times"></i>
                    </button>
                    <button type="submit" className="btn btn-default nav-link resp-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            
            {/* Messages Dropdown */}
            <div className="dropdown nav-item main-header-message">
              <a className="new nav-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                  strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="pulse-danger"></span>
              </a>
              <div className="dropdown-menu">
                <div className="menu-header-content bg-primary text-left">
                  <div className="d-flex">
                    <h6 className="dropdown-title mb-1 tx-15 text-white font-weight-semibold">Messages</h6>
                    <span className="badge badge-pill badge-warning ml-auto my-auto float-right">
                      Mark All Read
                    </span>
                  </div>
                  <p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12">
                    You have 4 unread messages
                  </p>
                </div>
                <div className="main-message-list chat-scroll">
                  {/* Message items */}
                </div>
                <div className="text-center dropdown-footer">
                  <Link href="/messages">VIEW ALL</Link>
                </div>
              </div>
            </div>

            {/* Notifications Dropdown */}
            <div className="dropdown nav-item main-header-notification">
              <a className="new nav-link" href="#">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="header-icon-svgs" 
                  viewBox="0 0 24 24"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="pulse"></span>
              </a>
              <div className="dropdown-menu">
                <div className="menu-header-content bg-primary text-left">
                  <div className="d-flex">
                    <h6 className="dropdown-title mb-1 tx-15 text-white font-weight-semibold">
                      Notifications
                    </h6>
                    <span className="badge badge-pill badge-warning ml-auto my-auto float-right">
                      Mark All Read
                    </span>
                  </div>
                  <p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12">
                    You have 4 unread Notifications
                  </p>
                </div>
                <div className="main-notification-list Notification-scroll">
                  <Link href="#" className="d-flex p-3 border-bottom">
                    <div className="notifyimg bg-pink">
                      <i className="la la-file-alt text-white"></i>
                    </div>
                    <div className="ml-3">
                      <h5 className="notification-label mb-1">New files available</h5>
                      <div className="notification-subtext">10 hour ago</div>
                    </div>
                    <div className="ml-auto">
                      <i className="las la-angle-right text-right text-muted"></i>
                    </div>
                  </Link>
                  <Link href="#" className="d-flex p-3">
                    <div className="notifyimg bg-purple">
                      <i className="la la-gem text-white"></i>
                    </div>
                    <div className="ml-3">
                      <h5 className="notification-label mb-1">Updates Available</h5>
                      <div className="notification-subtext">2 days ago</div>
                    </div>
                    <div className="ml-auto">
                      <i className="las la-angle-right text-right text-muted"></i>
                    </div>
                  </Link>
                  <Link href="#" className="d-flex p-3 border-bottom">
                    <div className="notifyimg bg-success">
                      <i className="la la-shopping-basket text-white"></i>
                    </div>
                    <div className="ml-3">
                      <h5 className="notification-label mb-1">New Order Received</h5>
                      <div className="notification-subtext">1 hour ago</div>
                    </div>
                    <div className="ml-auto">
                      <i className="las la-angle-right text-right text-muted"></i>
                    </div>
                  </Link>
                </div>
                <div className="text-center dropdown-footer">
                  <Link href="/messages">VIEW ALL</Link>
                </div>
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown main-profile-menu nav nav-item nav-link">
              <a className="profile-user d-flex" href="#">
                <Image src="/template/img/def.png" alt="user-img" width={40} height={40} className="rounded-circle" />
              </a>
              <div className="dropdown-menu">
                <div className="main-header-profile bg-primary p-3">
                  <div className="d-flex wd-100p">
                    <div className="main-img-user">
                      <Image src="/template/img/def.png" alt="" width={40} height={40} />
                    </div>
                    <div className="ml-3 my-auto">
                      <h6>User Name</h6>
                      <span>Premium Member</span>
                    </div>
                  </div>
                </div>
                <Link href="/profile" className="dropdown-item">
                  <i className="bx bx-user-circle"></i>Profile
                </Link>
                <Link href="/profile/edit" className="dropdown-item">
                  <i className="bx bx-cog"></i>Edit Profile
                </Link>
                <Link href="/messages" className="dropdown-item">
                  <i className="bx bx-envelope"></i>Messages
                </Link>
                <Link href="/settings" className="dropdown-item">
                  <i className="bx bx-slider-alt"></i>Account Settings
                </Link>
                <button className="dropdown-item" onClick={() => signOut()}>
                  <i className="bx bx-log-out"></i>Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
