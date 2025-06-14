import { capitalize, sanitize } from "./utils.js"
import { Search } from "./Search.js"

export class Dropdown {
    static activeDropdown = null

    constructor(element, rawOptions = []) {
        this.searchInstance = new Search()
        this.element = element
        this.optionsWrapper = element.querySelector(".options-wrapper")
        this.button = element.querySelector(".select-btn")
        this.searchInput = element.querySelector("input")

        this.rawOptions = rawOptions
        this.options = []
        this.filteredOptions = []

        this.isOpen = false
        this.searchTerm = ""
        this.type = this.element.dataset.type || "default"


        this.handleInput = this.handleInput.bind(this)
        this.handleOptionClick = this.handleOptionClick.bind(this)
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
        this.handleKeyboardNavigation = this.handleKeyboardNavigation.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    init() {
        this.element.addEventListener("click", this.toggle)
        this.setOptions(this.rawOptions)
    }

    updateDisplayedOptions(options) {
        this.setOptions(options)
    }

    setOptions(options) {
        this.options = this.cleanAndSortOptions(options)
        this.filteredOptions = [...this.options]
        this.renderOptions()
    }

    cleanAndSortOptions(options) {
        return options
            .map(opt => capitalize(sanitize(opt)))
            .filter(Boolean)
            .sort()
    }


    renderOptions() {
        this.optionsWrapper.innerHTML = ""

        if (this.filteredOptions.length === 0) {
            const empty = document.createElement("div")
            empty.className = "no-options-found"
            empty.textContent = "No results found"
            this.optionsWrapper.appendChild(empty)
            this.updateCount(0)
            return
        }

        const fragment = document.createDocumentFragment()
        this.filteredOptions.forEach(option => {
            const el = document.createElement("div")
            el.classList.add("option-item")
            el.textContent = option
            el.setAttribute("role", "option")
            el.setAttribute("tabindex", "-1")
            fragment.appendChild(el)
        })

        this.optionsWrapper.appendChild(fragment)

        this.updateCount(this.filteredOptions.length)
    }

    handleOptionClick(event) {
        event.stopPropagation()
        const clickedOption = event.target.closest(".option-item")
        if (!clickedOption) return

        const optionName = clickedOption.textContent.trim()
        const type = this.type


        this.searchInstance.addTag(optionName, type)
        this.close()
    }


    updateCount(count) {
        const countEl = this.button.querySelector("span")
        if (countEl) countEl.dataset.count = count
    }


    handleInput(event) {
        this.searchTerm = sanitize(event.target.value)
        this.filteredOptions = this.options.filter(option =>
            option.toLowerCase().includes(this.searchTerm.toLowerCase()),
        )
        this.renderOptions()
    }

    toggle(event) {
        if (event.target.closest("input")) return
        this.isOpen ? this.close() : this.open()
    }

    handleFocusOut = (event) => {
        if (!this.element.contains(event.relatedTarget)) {
            this.close()
        }
    }

    open() {
        if (Dropdown.activeDropdown && Dropdown.activeDropdown !== this) {
            Dropdown.activeDropdown.close()
        }

        this.isOpen = true
        Dropdown.activeDropdown = this

        this.element.classList.add("open")
        this.element.setAttribute("aria-expanded", "true")

        this.element.addEventListener("keydown", this.handleKeyboardNavigation)

        this.optionsWrapper.setAttribute("aria-hidden", "false")
        this.optionsWrapper.addEventListener("click", this.handleOptionClick)


        this.searchInput?.addEventListener("input", this.handleInput)

        document.addEventListener("click", this.handleOutsideClick)
        this.searchInput.focus()
        this.element.addEventListener("focusout", this.handleFocusOut)
    }

    close() {
        if (!this.isOpen) return

        this.isOpen = false
        Dropdown.activeDropdown = null

        this.element.classList.remove("open")
        this.element.setAttribute("aria-expanded", "false")

        this.element.removeEventListener("keydown", this.handleKeyboardNavigation)

        this.optionsWrapper.setAttribute("aria-hidden", "true")
        this.optionsWrapper.removeEventListener("click", this.handleOptionClick)


        this.searchInput?.removeEventListener("input", this.handleInput)
        document.removeEventListener("click", this.handleOutsideClick)
        this.element.blur()
        this.element.removeEventListener("focusout", this.handleFocusOut)
    }

    handleOutsideClick(event) {
        if (!this.element.contains(event.target)) {
            this.close()
        }
    }

    handleKeyboardNavigation(event) {
        const { key, shiftKey } = event
        const isInput = document.activeElement === this.searchInput
        const options = Array.from(this.optionsWrapper.querySelectorAll(".option-item"))
        const focusedOption = options.find(opt => opt === document.activeElement)
        const currentIndex = options.indexOf(focusedOption)

        switch (key) {
            case "ArrowDown":
                event.preventDefault()
                if (isInput && options.length > 0) {
                    options[0].focus()
                } else if (focusedOption && currentIndex < options.length - 1) {
                    options[currentIndex + 1].focus()
                }
                break

            case "ArrowUp":
                event.preventDefault()
                if (focusedOption && currentIndex > 0) {
                    options[currentIndex - 1].focus()
                } else {
                    this.searchInput.focus()
                }
                break

            case "Enter":
                if (focusedOption) {
                    focusedOption.click()
                }
                break

            case "Tab":
                if (isInput && options.length > 0 && !shiftKey) {
                    event.preventDefault()
                    options[0].focus()
                } else if (focusedOption && currentIndex === options.length - 1 && !shiftKey) {
                    this.close()
                }
                break

            case "Escape":
                this.close()
                break
        }
    }


    destroy() {
        this.element.removeEventListener("click", this.toggle)
        this.searchInput?.removeEventListener("input", this.handleInput)
        document.removeEventListener("click", this.handleOutsideClick)

    }
}
