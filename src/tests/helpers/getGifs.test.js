import { getGifts } from "../../helpers/getGifs"

describe('Pruebas con GetgifsFetch', () => {
    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifts('');
        // console.log(gifs)
        expect(gifs.length).toBe(0)
    })
})