'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [errors, setErrors] = useState<{
    name?: string[],
    email?: string[],
    password?: string[],
    password_confirmation?: string[]
  }>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        router.push('/dashboard');
      } else {
        const data = await response.json();
        setErrors(data.errors);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="my-auto page">
      <div className="main-signin-wrapper">
        <div className="container-fluid">
          <div className="row row-sm">
            {/* Image half */}
            <div className="col-lg-6 col-xl-7 d-none d-lg-block text-center bg-primary-transparent">
              <div className="mt-5 pt-4">
                <Image
                  src="/template/img/media/login.png"
                  alt="logo"
                  width={500}
                  height={400}
                  className="ht-xl-80p my-auto"
                  priority
                />
              </div>
            </div>

            {/* Content half */}
            <div className="col-lg-6 col-xl-5 col-xs-12 col-sm-12 login_form">
              <div className="container-fluid">
                <div className="row row-sm">
                  <div className="card-body mt-2 mb-2">
                    <div className="clearfix"></div>
                    <div className="text-center">
                      <Link href="/" className="d-flex align-items-center justify-content-center mb-4">
                        <Image
                          src="/template/img/logo-v.png"
                          alt="logo"
                          width={150}
                          height={150}
                          className="sign-favicon"
                        />
                      </Link>
                      <h2 className="text-primary">Get Started</h2>
                      <h5 className="font-weight-normal mb-4">
                        It&apos;s free to signup and only takes a minute.
                      </h5>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* Name */}
                      <div className="form-group text-start">
                        <label className="tx-medium">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          autoFocus
                        />
                        {errors.name && (
                          <div className="invalid-feedback d-block">{errors.name[0]}</div>
                        )}
                      </div>

                      {/* Email */}
                      <div className="form-group text-start">
                        <label className="tx-medium">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                        {errors.email && (
                          <div className="invalid-feedback d-block">{errors.email[0]}</div>
                        )}
                      </div>

                      {/* Password */}
                      <div className="form-group text-start">
                        <label className="tx-medium">Password</label>
                        <input
                          className="form-control"
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          required
                        />
                        {errors.password && (
                          <div className="invalid-feedback d-block">{errors.password[0]}</div>
                        )}
                      </div>

                      {/* Confirm Password */}
                      <div className="form-group text-start">
                        <label className="tx-medium">Confirm Password</label>
                        <input
                          className="form-control"
                          type="password"
                          value={formData.password_confirmation}
                          onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}
                          required
                        />
                        {errors.password_confirmation && (
                          <div className="invalid-feedback d-block">{errors.password_confirmation[0]}</div>
                        )}
                      </div>

                      <button type="submit" className="btn btn-primary btn-block">
                        Create Account
                      </button>
                    </form>

                    <div className="text-center mt-4">
                      <p className="text-muted mb-0">
                        Already have an account?{' '}
                        <Link href="/auth/login" className="text-primary">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
