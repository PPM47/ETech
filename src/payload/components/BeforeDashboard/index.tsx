import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from 'payload/components'

import { SeedButton } from './SeedButton'

import './index.scss'
import Image from 'next/image'

const baseClass = 'before-dashboard'
const logoimg = 'logoimage'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Image
        src="/white-logo-no-sd.webp"
        alt="logo"
        width={170}
        height={23}
        className={logoimg}
      />
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to ETech Admin dashboard!</h4>
      </Banner>
    </div>
  )
}

export default BeforeDashboard
