import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'
import { profileNavItems } from '../../constants/'
import { UserInfo } from './UserInfo'

import classes from './index.module.scss'
import { HR } from '../../_components/HR'
import ContinueShopping from '../../_components/ContinueShopping'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.container}>
      <Gutter>
        <h3>My Profile</h3>
        <div className={classes.account}>
          <div className={classes.nav}>
            <UserInfo />
            <div className={classes.hr}/>
            <ul className={classes.navul}>
              {profileNavItems.map(item => (
                <li key={item.title}>
                  <Link href={item.url} className={classes.navItem}>
                    <Image src={item.icon} alt={item.title} width={24} height={24} />
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.hr1}/>
          {children}
        </div>
        <ContinueShopping />
      </Gutter>
    </div>
  )
}
