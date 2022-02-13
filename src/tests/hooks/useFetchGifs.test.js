import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Test Hook UseFetchGifs', () => {
    test('Debe retornar el estado inicial', async()=>{
        // const { data, loading } = useFetchGifs('One punch')
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('OnePunch man'))
        const { data, loading } = result.current
        await waitForNextUpdate();

        // console.log(data, loading)
        expect(data).toEqual([])
        expect(loading).toBe(true)

    })
    test('debe retornar un arreglo de imgs y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current
        // console.log(data, loading)
        expect(data.length).toBe(5)
        expect(loading).toBe(false)
    })
})