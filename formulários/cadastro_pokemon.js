attributeInputs = [
    document.getElementById("health-points"),
    document.getElementById("base-speed"),
    document.getElementById("base-attack-points"),
    document.getElementById("base-defense-points"),
    document.getElementById("base-special-attack-points"),
    document.getElementById("base-special-defense-points")
]


loadTypeSelects = () => {
    let pokemonTypes = [
        "--",
        "Aço",
        "Água",
        "Dragão",
        "Elétrico",
        "Fada",
        "Fantasma",
        "Fogo",
        "Gelo",
        "Inseto",
        "Lutador",
        "Normal",
        "Pedra",
        "Planta",
        "Psíquico",
        "Sombrio",
        "Terra",
        "Venenoso",
        "Voador"
    ]

    let typeSelects = document.getElementsByClassName("type-options")

    for (let i = 0; i < typeSelects.length; i++) {
        let s = typeSelects[i];
        pokemonTypes.forEach(t => {
            let typeOption = document.createElement("option")
            typeOption.text = t
            typeOption.value = t
            s.appendChild(typeOption)
        })
    };
}

//Função pega do Mozilla
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateRandomAttributes = () => {
    this.attributeInputs.forEach(i => {
        i.value = getRandomIntInclusive(1, 70)
    })
}

addOnChangeEvent = (element, event) => {
    element.onchange = event;
}

updateTotalEvent = () => {
    let totalSpan = document.getElementById("total")
    let totalPoints = 0

    attributeInputs.forEach(i => {
        totalPoints += parseInt(i.value)
    })

    totalSpan.innerHTML = totalPoints
}


loadTypeSelects()
generateRandomAttributes()

attributeInputs.forEach(i => {
    addOnChangeEvent(i, updateTotalEvent)
})

updateTotalEvent()