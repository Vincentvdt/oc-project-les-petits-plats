import { capitalize, formatTime, formatUnit } from "./utils.js"

export class Recipe {
    static IMAGE_PATH = "./assets/img/"


    constructor(recipe) {
        this.recipe = recipe
        this.ingredients = this.extractIngredients()
        this.appliances = this.extractAppliances()
        this.utensils = this.extractUtensils()
    }

    get name() {
        return this.recipe.name ? capitalize(this.recipe.name) : "Recette sans nom"
    }

    buildPicturePath = () => `${Recipe.IMAGE_PATH}${this.recipe.image}`

    createCardElement = () => {
        const recipeHTML = this.createHTMLString()
        const parser = new DOMParser()
        const recipeNode = parser.parseFromString(recipeHTML, "text/html").body.firstChild
        return recipeNode.cloneNode(true)
    }

    createHTMLString = () => `
            <article class="recipe-card">
                <div class="recipe-time">
                    <span>${formatTime(this.recipe.time)}</span>
                </div>
                <div class="recipe-img-container">
                    <img alt="${this.recipe.name}" src="${this.buildPicturePath()}">
                </div>
                <div class="recipe-content">
                    <div class="recipe-title">
                        <h2>${this.recipe.name}</h2>
                    </div>
                    <div class="recipe-infos">
                        <div class="recipe-description">
                            <h3>Recette</h3>
                            <p>${this.recipe.description}</p>
                        </div>
                        <div class="recipe-ingredients">
                            <h3>Ingrédients</h3>
                            <div class="recipe-ingredients_list">
                                ${this.renderIngredientsHTML()}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        `

    renderIngredientsHTML = () => {
        return this.ingredients
            .map(({ name, quantity, unit }) =>
                `
                <div class="recipe-ingredient">
                    <p class="recipe-ingredient_name">${name}</p>
                    <p class="recipe-ingredient_quantity">${[quantity, formatUnit(unit, quantity)].filter(Boolean).join(" ")}</p>
                </div>
                `,
            ).join("")
    }

    extractIngredients = () => {
        return this.recipe.ingredients.map(ingredient => {
            const { name, quantity, unit } = ingredient
            return {
                name: capitalize(name.toLowerCase()),
                quantity: quantity || "",
                unit: unit ? capitalize(unit) : "",
            }
        })
    }

    extractAppliances = () => {
        const appliances = this.recipe.appliances.toString()
        return appliances
            ? (appliances).split(", ").map(appliance => capitalize(appliance.toLowerCase()))
            : []
    }

    extractUtensils = () => {
        return this.recipe.utensils
            ? this.recipe.utensils.map(utensil => capitalize(utensil.toLowerCase()))
            : []
    }
}


