// import React, { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GiftGrid = ({ category }) => {
    // const [images, setImages] = useState([])

    const {data, loading} = useFetchGifs(category);
    console.log(data,loading)
    // useEffect(() => {
    //     getGifts(category).then( imgs => setImages(imgs))
    // }, [category]) // solo se ejecuta una vez



    // getGifts()
    return (
        <>
            <h3> {category}</h3>
            <div className='card-grid'>

                {
                    data.map((img) =>
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
