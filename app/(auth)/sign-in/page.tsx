"use client";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href="/">
        <Image src="/assets/icons/logo.svg" alt='logo' width={32} height={32} />
        <h1>Capturly</h1>
        </Link>
        <div className='description'>
          <section>
            <figure>
              {Array.from({length:5}).map((_,index)=>(<Image src="/assets/icons/star.svg" alt='star' width={20} height={20} key={index}/>))}
            </figure>
            <p>Capturely makes Screen recording easy. From quick walkthrough to full presentation, it's fast, smooth, and sharable in seconds </p>

            <article>
              <Image src='/assets/images/jerry.jpeg' alt='jerry' height={64} width={64} className='rounded-full'/>
              <div><h2>Jerry</h2>
              <p>Product Analyst</p></div>
            </article>
          </section>
        </div>
        <p>&#169; Capturly {(new Date().getFullYear())}</p>
      </aside>

      <aside className='google-sign-in'>
      <section>
        <Link href='/'>
        <Image src="/assets/icons/logo.svg" alt='logo' width={40} height={40} />
         <h1>Capturly</h1>
        </Link>
       <p>Create and share your very first <span>Capturly Video</span> in no time!</p>
      <button onClick={handleSignIn}>
        <Image src='/assets/icons/google.svg' alt='google' width={22} height={22} />
        <span>Sign in With Google</span>
      </button>
      </section>
      </aside>

      <div className='overlay'/>

    </main>
  )
}

export default page