'use client'

import React from 'react'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import classes from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'
// import { ThemeSelector } from '../../../_providers/Theme/ThemeSelector'


const FooterComponent = ({footer} : {footer: Footer}) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title} className={classes.li}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={32}
                height={32}
                className={classes.iconimg}
              />
              <h6 className={classes.title}>{inclusion.title}</h6>
              <p className={classes.ptag}>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
            <Image
            src="/white-logo-no-sd.webp"
            alt='logo'
            width={140}
            height={40}
            className={classes.logo}
            />
            </Link>
            <div className={classes.socialLinks}>
              {navItems.map((item) => {
                const icon = item?.link?.icon as Media
                return (
                  <Button
                  key={item.link.label}
                  el="link"
                  href={item.link.url}
                  newTab={true}
                  className={classes.socialLinkItem}
                  >
                   <Image
                   src={icon?.url}
                   alt='item.link.label'
                    width={24}
                    height={24}
                    className={classes.socialIcon}
                   >
                    
                   </Image>
                  </Button>
                )
              })}
            </div>
            <p>{footer.copyright}</p>
            {/* <div className={classes.themeselector}>
            <ThemeSelector />
            </div> */}
          </div>
          
        </Gutter>
      </div>
      
    </footer>
  )
}
export default FooterComponent
