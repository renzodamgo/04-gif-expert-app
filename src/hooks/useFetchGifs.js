import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        getGifts(category).then(
            imgs => {
                setState({
                    data: imgs,
                    loading: false
                })

            }
        )
    },[])

    return state;
}