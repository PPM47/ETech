import React from 'react'

import { Product } from '../../../payload/payload-types'
import { Card } from '../../_components/Card'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export type RelatedProductsProps = {
  blockType: 'relatedProducts'
  blockName: string
  introContent?: any
  docs?: (Product | string)[]
  relationTo: 'products'
}

export const RelatedProducts: React.FC<RelatedProductsProps> = props => {
  const { docs, relationTo } = props

  return (
    <div className={classes.relatedProducts}>
      {/* {introContent && (
        <Gutter className={classes.introContent}>
          <RichText content={introContent} />
        </Gutter>
      )} */}

      <Gutter>
        <h4 className={classes.title}>Related Products</h4>
        <div className={classes.grid}>
          {docs?.map(doc => {
            if (typeof doc === 'string') return null

            return <Card key={doc.id} relationTo={relationTo} doc={doc} showCategories />
          })}
        </div>
      </Gutter>
    </div>
  )
}
