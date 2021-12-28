// import React, { useEffect, useState } from 'react'
// import { getGifts } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GiftGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);
    console.log(images,loading)

    return (
        <>
            <h3> {category}</h3>
            {loading && <p>Loading....</p>}

            <div className='card-grid'>

                {
                    images.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }



            </div>

        </>
    )
}
