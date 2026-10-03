import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export function Login() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1">
      <section className="login-pitch" aria-label="Product pitch">
        <h1>Every number about your business, in one place.</h1>
        <p>Revenue, retention and pipeline — refreshed hourly from the tools you already use.</p>
      </section>

      <section className="login-form w-full lg:max-w-md lg:justify-self-center" aria-label="Sign in">
        <h2>Sign in</h2>
        <p>
          This one page signs in both kinds of ForgeCRM users. Agency team
          members land on the agency <Link to="/dashboard">Portfolio dashboard</Link>;
          client users such as Acme Retail land on their own{' '}
          <Link to="/portal">client portal</Link>. The account behind these credentials
          decides which one you get.
        </p>

        {/* PLACEHOLDER: login — replaced by bcrypt-backed authentication at the Service deliverable */}
        <form>
          <p>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" name="email" placeholder="jordan@acmeretail.com" autoComplete="username" required />
          </p>
          <p>
            <label htmlFor="password">Password</label> (<a href="#">Forgot?</a>)
            <br />
            <input type="password" id="password" name="password" autoComplete="current-password" required />
          </p>
          <p>
            <button type="button">Sign in</button>
          </p>
        </form>

        <p>
          No account yet? <a href="#">Ask your account manager</a>.
        </p>
      </section>
    </main>
  );
}
