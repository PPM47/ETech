import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'
import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default async function RecoverPassword() {
  return (
    <section className={classes.recoversection}>
      <div className={classes.heroImg} />
      <div className={classes.rformWrapper}>
        <div className={classes.rformContainer}>
          <Link href="/login" className={classes.backArrow}>
            <Image src="/assets/icons/arrow-left.svg" alt="back Arrow" width={30} height={30} />
            <p>Back</p>
          </Link>
          <Link href="/">
            <Image
              src="/white-logo-no-sd.webp"
              alt="logo"
              width={170}
              height={23}
              className={classes.logo}
            />
          </Link>
          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
