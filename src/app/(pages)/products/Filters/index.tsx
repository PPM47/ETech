'use client'
import React from 'react'

import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'
import Categories from '../../../_components/Categories'
import { Category } from '../../../../payload/payload-types'
import { CheckBox } from '../../../_components/Checkbox'
import { HR } from '../../../_components/HR'
import { RadioButton } from '../../../_components/RedioButton'
import SearchBar from '../../../_components/SearchBar/SearchBar';

const Filters = ({ categories }: { categories: Category[] }) => {
  const { catFilters, sort, setCatFilters, setSort } = useFilter()

  const handleCat = (categoryId: string) => {
    if (catFilters.includes(categoryId)) {
      const updateCat = catFilters.filter(id => id !== categoryId)
      setCatFilters(updateCat)
    } else {
      setCatFilters([...catFilters, categoryId])
    }
  }
  const handleSort = (value: string) => setSort(value)

  return (
    <div className={classes.filterMain}>
      <div className={classes.filters}>
      {/* <SearchBar /> */}
        <div>
          <h5 className={classes.title}>Sort & Filter </h5>
        </div>
        <div className={classes.cats}>
          {categories.map(category => {
            const isSelected = catFilters.includes(category.id)
            return (
              <CheckBox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCat}
              />
            )
          })}
        </div>
      </div>
      <HR />
      <div className={classes.radio}>
        <div>
          <h6 className={classes.title}>Sort By</h6>
        </div>
        <div className={classes.cats}>
          <RadioButton
            label="Latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
          <RadioButton
            label="Oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
