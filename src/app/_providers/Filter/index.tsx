'use client'
import { createContext, SetStateAction, useContext, useState } from 'react'

interface IcontextType {
    catFilters: string[]
    setCatFilters: React.Dispatch<SetStateAction<string[]>>
    sort: string
    setSort: React.Dispatch<SetStateAction<string>>
 
}

export const INITIAL_FILTER_DATA = {
    catFilters: [],
    setCatFilters: () => [],
    sort: '',
    setSort: () => '',

}
const FilterContext = createContext<IcontextType>(INITIAL_FILTER_DATA);

export const FilterProvider = ({ children } : { children: React.ReactNode}) => {
    const [catFilters, setCatFilters] = useState([])
    const [sort, setSort] = useState('-createdAt')

    return (
        <FilterContext.Provider value={{
            catFilters,
            setCatFilters,
            sort,
            setSort,
    }}>
        {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)