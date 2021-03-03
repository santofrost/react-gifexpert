import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Iron-man']);

    return (
        <>
            <h2>Gif Expert</h2>
            <hr />

            <AddCategory setCategories={ setCategories } />

            <ol>
                {
                    categories.map(category => 
                        <GifGrid
                            key={ category }
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
