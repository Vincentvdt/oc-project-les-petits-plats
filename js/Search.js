import { Counter } from "./Counter.js"
import { Recipe } from "./Recipe.js"
import { Dropdown } from "./Dropdown.js"
import { Tag } from "./Tag.js"

let instance

export class Search {

    constructor(data) {
        if (instance) {
            return instance
        } else {
            instance = this
        }
        this.data = data
        this.counter = new Counter()
        this.gallery = document.querySelector(".recipes")
        this.searchBar = document.querySelector(".search-bar")
        this.searchBar.input = this.searchBar.querySelector("input")
        this.tagsWrapper = document.querySelector(".tags")
        this.searchTerm = ""
        this.tags = []
        this.recipes = []
        this.dropdowns = []
    }


    init() {
        this.filter()
        this.initDropdowns()
        this.initListeners()

    }

    setRecipes(recipes) {
        this.recipes = recipes.map(recipe => new Recipe(recipe))
        this.counter.setCount(recipes.length)
        this.updateDropdowns()
        this.renderRecipes()

    }

    filterBySearchTerm(recipes, term) {
        this.searchTerm = term.toLowerCase().trim()


        return recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(this.searchTerm) ||
                recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(this.searchTerm)) ||
                recipe.appliances.some(appliance => appliance.toLowerCase().includes(this.searchTerm)) ||
                recipe.utensils.some(utensil => utensil.toLowerCase().includes(this.searchTerm))
        })

    }


    filterByTag(recipes, tags = []) {
        if (!tags.length) return []

        return recipes.filter(recipe =>
            tags.every(tag => {
                const normalizedTagName = tag.name.toLowerCase()
                switch (tag.type) {
                    case "ingredients":
                        return recipe.ingredients.some(ingredient => ingredient.name.toLowerCase() === normalizedTagName)
                    case "appliances":
                        return recipe.appliances.some(appliance => appliance.toLowerCase() === normalizedTagName)
                    case "utensils":
                        return recipe.utensils.some(utensil => utensil.toLowerCase() === normalizedTagName)
                    case "search":
                        return recipe.name.toLowerCase().includes(normalizedTagName) ||
                            recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(normalizedTagName)) ||
                            recipe.appliances.some(appliance => appliance.toLowerCase().includes(normalizedTagName)) ||
                            recipe.utensils.some(utensil => utensil.toLowerCase().includes(normalizedTagName))
                    default:
                        console.warn(`Unknown tag type: ${tag.type}`)
                        return false
                }
            }),
        )
    }

    filter() {
        let filteredRecipes = this.data

        if (this.searchTerm.length) {
            filteredRecipes = this.filterBySearchTerm(filteredRecipes, this.searchTerm)
        }
        if (this.tags.length > 0) {
            filteredRecipes = this.filterByTag(filteredRecipes, this.tags)
        }

        this.setRecipes(filteredRecipes)
        this.updateDropdowns()
    }

    addTag(name, type) {
        const alreadyExists = this.tags.find(tag => tag.name.toLowerCase() === name.toLowerCase() && tag.type === type)
        if (alreadyExists) {
            alreadyExists.element.classList.add("already-exists")
            setTimeout(() => {
                alreadyExists.element.classList.remove("already-exists")
            }, 1000)
            this.updateDropdowns()
            return
        }
        const tag = new Tag(name, type)
        this.tags.push(tag)
        this.renderTags()
        this.filter()
    }

    removeTag(tag) {
        const tagName = tag.name.toLowerCase()
        const tagType = tag.type

        this.tags = this.tags.filter(tag => !(tag.name.toLowerCase() === tagName && tag.type === tagType))
        this.renderTags()
        this.filter()
    }


    renderTags() {
        if (this.tags.length === 0) {
            this.tagsWrapper.innerHTML = ""
            return
        }

        this.tagsWrapper.innerHTML = ""
        const fragment = document.createDocumentFragment()
        this.tags.forEach(tag => {
            fragment.appendChild(tag.createTagElement())
        })

        this.tagsWrapper.appendChild(fragment)
    }


    renderRecipes() {
        if (this.recipes.length === 0) {
            this.gallery.textContent = "Aucune recette disponible pour l'instant. Essayez quelque chose d'autre!"
            return
        }
        this.gallery.innerHTML = ""
        const fragment = document.createDocumentFragment()

        this.recipes.forEach(recipe => {
            fragment.appendChild(recipe.createCardElement())
        })

        this.gallery.appendChild(fragment)
    }


    getOptionsForDropdown(type) {
        const options = new Set()

        const activeTags = this.tags.filter(tag => tag.type === type).map(tag => tag.name.toLowerCase())
        const tagSet = new Set(activeTags)

        this.recipes.forEach(recipe => {
            switch (type) {
                case "ingredients":
                    recipe.extractIngredients().forEach(ingredient => {
                        const name = ingredient.name.toLowerCase()
                        if (!tagSet.has(name)) options.add(name)
                    })
                    break
                case "appliances":
                    recipe.extractAppliances().forEach(appliance => {
                        const name = appliance.toLowerCase()
                        if (!tagSet.has(name)) options.add(name)
                    })
                    break
                case "utensils":
                    recipe.extractUtensils().forEach(utensil => {
                        const name = utensil.toLowerCase()
                        if (!tagSet.has(name)) options.add(name)
                    })
                    break
                default:
                    console.error(`Unknown dropdown type: ${type}`)
            }
        })

        return Array.from(options).sort()
    }


    initDropdowns() {
        const dropdowns = document.querySelectorAll(".dropdown")
        dropdowns.forEach(dropdown => {
            const options = this.getOptionsForDropdown(dropdown.dataset.type)
            const dropdownInstance = new Dropdown(dropdown, options)
            this.dropdowns.push({
                instance: dropdownInstance,
                type: dropdown.dataset.type,
            })
            dropdownInstance.init()
        })
    }

    updateDropdowns() {
        this.dropdowns.forEach(dropdown => {
            const options = this.getOptionsForDropdown(dropdown.type)
            dropdown.instance.updateDisplayedOptions(options)
        })
    }

    initListeners() {
        this.searchBar.input.addEventListener("input", this.handleOnInputChange.bind(this))
        this.searchBar.addEventListener("submit", this.handleOnSearchSubmit.bind(this))
    }

    handleOnInputChange(e) {
        this.searchTerm = e.target.value.trim().toLowerCase()
        if (this.searchTerm.length < 3) {
            if (this.searchTerm.length === 0) {
                this.filter()
            }
            return
        }
        this.filter()
    }

    handleOnSearchSubmit(e) {
        e.preventDefault()
        this.searchTerm = this.searchBar.input.value.trim().toLowerCase()
        if (this.searchTerm.length < 3) {
            return
        }
        this.addTag(this.searchTerm, "search")
        this.searchBar.input.value = ""
        this.searchTerm = ""
    }

}
