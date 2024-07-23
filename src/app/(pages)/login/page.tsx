import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    <section className={classes.login}>
      <div className={classes.heroImg} />
      <div className={classes.heroImg1} />

      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <Link href="/">
            <Image
              src="/white-logo-no-sd.webp"
              alt="logo"
              width={170}
              height={23}
              className={classes.logo}
            />
          </Link>

          <div className={classes.formTitle}>
            <h3>Welcome Back! </h3>
            {/* <p>Sign in to your account. </p> */}
            {/* <Image src="/assets/icons/hand.png" alt="hand" width={30} height={30} /> */}
          </div>
          <p>Please login here</p>
          <RenderParams className={classes.params} />
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
