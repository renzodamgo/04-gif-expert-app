import React, { useState, useEffect } from 'react'

export const GiftGrid = ({ category }) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifts()
    }, []) // solo se ejecuta una vez

    const getGifts = async() => {
        const url = "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=5&api_key=cHrzYubYZ4nTPGmAmQrGm1aDRtL1Vlr5"
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
        <div>
            <h3> {category}</h3>
            <ol>
                {
                    images.map((image) =>
                        <li key={image.id}> {image.title}</li>)
                }

            </ol>

        </div>
    )
}
