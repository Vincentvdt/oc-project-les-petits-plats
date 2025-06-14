import { capitalize } from "./utils.js"
import { Search } from "./Search.js"

export class Tag {
    constructor(name, type) {
        this.element = null
        this.searchInstance = new Search()
        this.name = name
        this.type = type
        this.clickHandler = () => {
            this.searchInstance.removeTag(this)
        }
    }

    createTagElement() {
        const tagElement = document.createElement("div")
        tagElement.classList.add("tag-item")
        tagElement.dataset.type = this.type
        tagElement.dataset.value = this.name.toLowerCase()
        tagElement.innerHTML = `
            ${capitalize(this.name)}
            <svg fill="none" height="13" viewBox="0 0 14 13" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5"  stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2.16667"/>
            </svg>`

        tagElement.addEventListener("click", this.clickHandler)
        this.element = tagElement
        return tagElement
    }
}