'use client'

import Link from 'next/link'
import classes from './index.module.scss'

import React, { useState } from 'react'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import Image from 'next/image'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'

const CheckoutItem = ({ product, title, metaImage, quantity, index }) => {
  return (
    <li className={classes.itemli} key={index}>
      <div className={classes.cartItemCon}>
        <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
          {!metaImage && <span>No Image</span>}
          {metaImage && typeof metaImage !== 'string' && (
            <Media
              className={classes.media}
              imgClassName={classes.image}
              resource={metaImage}
              fill
            />
          )}
        </Link>
        <div className={classes.itemDetails}>
          <div className={classes.titleWrapper}>
            <h6>{title}</h6>
            <Price product={product} button={false} />
          </div>
          <div className={classes.quantity}>
            <p>x{quantity}</p>
          </div>

          <div className={classes.subtotal}>
            <Price product={product} button={false} quantity={quantity} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default CheckoutItem
