import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - Amazona' : 'Amazona'} Create Next App
        </title>
        <meta name="description" content="Ecommerce Amazona " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex justify-between h-12 shadow-md items-center px-4">
            <Link href={'/'}>
              <a href="" className="text-lg font-bold">
                Amazona
              </a>
            </Link>

            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer
          className="flex justify-center items-center 
        h-10 shadow-inner"
        >
          <p> Copyright &copy; 2022 Amazona</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
