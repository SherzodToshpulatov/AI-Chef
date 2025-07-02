import React from 'react'
import CloudeRecipe from './CloudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from '../ai'

export default function Main(){
    const [ingredients, setingredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")


    async function getRecipe() {
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
    }

    function handleSubmit(formData){
     
        const newIngredient = formData.get("ingredient")
        setingredients(prevIngredients => [...prevIngredients,newIngredient])
        
    }
  


    return(
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input type="text"
                placeholder="e.g. tomato"
                aria-label="Add ingredient"
                name = "ingredient"
                 />
                
                <button >Add ingredient</button>
            </form>
            {ingredients.length>0 && <IngredientsList ingredients = {ingredients} getRecipe={getRecipe}/>}
            {recipe && <CloudeRecipe markdown={recipe}/>}
        </main>
    )
}