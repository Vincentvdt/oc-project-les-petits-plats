export const capitalize = (str) => {
    if (typeof str !== "string" || !str) return ""
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const sanitize = (str) => {
    if (typeof str !== "string") return ""
    const tagless = str.replace(/<\/?[^>]+(>|$)/g, "")
    const normalized = tagless.replace(/\s+/g, " ").trim()
    return normalized.toLowerCase()
}
export const formatTime = (minutes) => {
    if (typeof minutes !== "number" || minutes < 0) return ""
    if (minutes < 60) {
        return `${Math.round(minutes)}min`
    }
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = Math.round(minutes % 60)
    return remainingMinutes === 0 ? `${hours}h` : `${hours}h${remainingMinutes}min`
}


const unitContractions = {
    "grammes": "g",
    "gramme": "g",
    "kilogrammes": "kg",
    "kilogramme": "kg",
    "milligrammes": "mg",
    "milligramme": "mg",
    "litres": "l",
    "litre": "l",
    "centilitres": "cl",
    "centilitre": "cl",
    "millilitres": "ml"
    , "millilitre": "ml",
    "cuillères à soupe": "c. à s.",
    "cuillère à soupe": "c. à s.",
    "cuillères à café": "c. à c.",
    "cuillère à café": "c. à c.",

}

const contractedUnitsSet = new Set(Object.values(unitContractions))

const pluralize = (word, count) => {
    if (!word) return ""
    const lowerWord = word.toLowerCase()
    if (contractedUnitsSet.has(lowerWord)) {
        return word
    }

    return count <= 1 ? singularize(word) : `${word}s`
}


const singularize = (word) => {
    if (!word) return ""

    const lowerWord = word.toLowerCase()

    if (Object.values(unitContractions).includes(lowerWord)) {
        return word
    }

    if (!lowerWord.endsWith("s")) return word

    return word.slice(0, -1)
}

const contractUnit = (unit) => {
    if (!unit) return ""
    const normalizedUnit = unit.toLowerCase()
    return unitContractions[normalizedUnit] || unit
}


export const formatUnit = (unit, quantity) => {
    if (!unit) return ""
    const contractedUnit = contractUnit(unit)
    if (contractedUnit === "g" && quantity < 1) {
        return `${Math.round(quantity * 1000)}mg`
    }
    return pluralize(contractedUnit, quantity).trim().toLowerCase() || unit
}
