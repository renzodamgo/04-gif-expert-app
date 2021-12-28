import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'

export const GiftGrid = ({ category }) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifts()
    }, []) // solo se ejecuta una vez

    const getGifts = async () => {
        const trimCategory = category.replace(/\s/g, '+')
        const url = `https://api.giphy.com/v1/gifs/search?q=${trimCategory}&limit=5&api_key=cHrzYubYZ4nTPGmAmQrGm1aDRtL1Vlr5`
        console.log(url)
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        console.log(gifs)
        setImages(gifs)
    }

    // getGifts()
    return (
        <>
            <h3> {category}</h3>
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
