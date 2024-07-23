'use client'

import Link from 'next/link'
import classes from './index.module.scss'

import React, { useState } from 'react'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import Image from 'next/image'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'
import { HR } from '../../../_components/HR'

const CartItem = ({ product, title, metaImage, qty, addItemToCart }) => {
  const [Qty, setQty] = useState(qty)

  const decrQty = () => {
    const updQty = Qty > 1 ? Qty - 1 : 1
    setQty(updQty)
    addItemToCart({ product, Qty: Number(updQty) })
  }
  const incrQty = () => {
    const updQty = Qty + 1
    setQty(updQty)
    addItemToCart({ product, Qty: Number(updQty) })
  }
  const enterQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updQty = Number(e.target.value)

    setQty(updQty)
    addItemToCart({ product, Qty: Number(updQty) })
  }

  return (
    <li className={classes.itemli}>
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
            <div className={classes.quantityBtn} onClick={decrQty}>
              <Image
                src="/assets/icons/minus.svg"
                alt="minus"
                width={24}
                height={24}
                className={classes.qtyBtn}
              />
            </div>
            <input type="text" className={classes.quantityInput} value={Qty} onChange={enterQty} />
            <div className={classes.quantityBtn} onClick={incrQty}>
              <Image
                src="/assets/icons/plus.svg"
                alt="plus"
                width={24}
                height={24}
                className={classes.qtyBtn}
              />
            </div>
          </div>
          <div className={classes.subtotalWrapper}>
            <Price product={product} button={false} quantity={Qty} />
            <RemoveFromCartButton product={product} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
