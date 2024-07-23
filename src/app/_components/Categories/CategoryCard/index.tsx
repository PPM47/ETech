'use client'
import React from 'react'

import classes from './index.module.scss'
import Link from 'next/link'
import { Category } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media
  const { setCatFilters } = useFilter()
  return (
    <Link
      href="/products"
      className={classes.catcard}
      style={{ backgroundImage: `url(${media.url})` }}
      onClick={() => setCatFilters([category.id])}
    >
      <div className={classes.titleCon}>
        <h6 className={classes.title}>{category.title}</h6>
      </div>
    </Link>
  )
}

export default CategoryCard
