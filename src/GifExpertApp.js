import { useState } from "react"

export const GifExpertApp = () => {
    // const categories = ['One punch man','Naruto','Dragon Ball']
    const [categories, setCategories] = useState(['One punch man', 'Naruto', 'Dragon Ball'])

    const handleAdd = () => {
        // setCategories([...categories, 'Digimon'])
        // Set categories regresa un callback con el elemento usado
        setCategories(cats =>[...cats, 'Digimon'])
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </div>
    )
}
