export class Counter {
    constructor() {
        this.counterElement = document.querySelector(".recipes_count")
        this.count = 0
    }

    setCount(count) {
        this.count = count
        this.updateCounter()
    }

    updateCounter() {
        if (this.count === 0) {
            this.counterElement.textContent = "Aucune recette trouvée"
        } else {
            this.counterElement.textContent = `${this.count} recette${this.count > 1 ? "s" : ""} trouvée${this.count > 1 ? "s" : ""}`
        }
    }
    
}