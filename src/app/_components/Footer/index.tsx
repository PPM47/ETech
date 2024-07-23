
import React from 'react'
import { fetchFooter} from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'
import { Footer } from '../../../payload/payload-types'
// import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'



export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (e) {
    console.error(e)
  }
  // <ThemeSelector />
  // {navItems.map(({ link }, i) => {
  //   return <CMSLink key={i} {...link} />
  // })}
  const navItems = footer?.navItems || []
  return (
    <> 
        <FooterComponent footer={footer}/>
    </>
  )
}
