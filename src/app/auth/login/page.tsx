'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [errors, setErrors] = useState<{email?: string[], password?: string[]}>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Implement your login logic here
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        router.push('/dashboard'); // Redirect after successful login
      } else {
        const data = await response.json();
        setErrors(data.errors);
      }
    } catch (error) {
      console.error('Login error:', error);
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
                      <h2 className="text-center mb-2">Welcome Back!</h2>
                      <p className="text-muted tx-16 mb-4">Please sign in to continue.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
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

                      <div className="form-group text-start">
                        <label className="custom-control custom-checkbox mb-0">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked={formData.remember}
                            onChange={(e) => setFormData({...formData, remember: e.target.checked})}
                          />
                          <span className="custom-control-label">Remember me</span>
                        </label>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block">
                        Sign In
                      </button>
                    </form>

                    <div className="text-center mt-4">
                      <p className="mb-2">
                        <Link href="/auth/forgot-password" className="text-primary">
                          Forgot Password?
                        </Link>
                      </p>
                      <p className="text-muted mb-0">
                        Don&apos;t have an account?{' '}
                        <Link href="/auth/register" className="text-primary">
                          Create an Account
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
