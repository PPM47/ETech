import React from 'react'

import classes from './index.module.scss'
import Link from 'next/link'
import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className={classes.categorySection}>
      <div className={classes.titlewapper}>
        <h3>Shop by Categories</h3>
        <Link href="/products" className={classes.showAllLink}>
          Show All
        </Link>
      </div>

      <div className={classes.catlist}>
        {categories.map(category => {
          return <CategoryCard key={category.id} category={category} />
        })}
      </div>
    </section>
  )
}

export default Categories
