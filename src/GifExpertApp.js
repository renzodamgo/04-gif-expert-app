import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GiftGrid } from "./components/GiftGrid"

export const GifExpertApp = () => {
    // const categories = ['One punch man','Naruto','Dragon Ball']
    const [categories, setCategories] = useState(['One punch man'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Digimon'])
    //     // Set categories regresa un callback con el elemento usado
    //     setCategories(cats =>[...cats, 'Digimon'])
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category =>
                        <GiftGrid
                            key = { category}
                            category={category}
                        />
                    )

                }
            </ol>
        </div>
    )
}
