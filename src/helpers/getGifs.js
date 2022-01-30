export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=cHrzYubYZ4nTPGmAmQrGm1aDRtL1Vlr5`
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
    // console.log(gifs)
    return gifs
}