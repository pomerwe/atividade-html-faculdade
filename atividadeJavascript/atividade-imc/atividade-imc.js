function calcularImc()
{
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)/100

    let resultadoSpan = document.getElementById("imcResultado")
    let situacaoSpan = document.getElementById("imcSituação")

    let imc = peso / (altura * altura)
    let situacao = getSituationType(imc)

    resultadoSpan.innerHTML = `Imc de: ${imc}`
    situacaoSpan.innerHTML = `Situação: ${situacao}`
}

function getSituationType(imcValue) {
    if (imcValue < 17)
        return "Muito abaixo do peso"

    if (imcValue >= 17 && imcValue < 18.5)
        return "Abaixo do peso"

    if (imcValue >= 18.5 && imcValue < 25)
        return "Peso normal"

    if (imcValue >= 25 && imcValue < 30)
        return "Acima do peso"

    if (imcValue >= 30 && imcValue < 35)
        return "Obesidade I"

    if (imcValue >= 35 && imcValue < 40)
        return "Obesidade II (servera)"

    if (imcValue >= 40)
        return "Obesidade III (mórbida)"
}





let tabela = `╔═════════════════════╦═══════════════════════════╦
║ Resultado           ║ Situação                  ║
╠═════════════════════╬═══════════════════════════╬
║ Abaixo de 17        ║ Muito abaixo do peso      ║
╠═════════════════════╬═══════════════════════════╬
║ Entre 17 e 18,49    ║ Abaixo do peso            ║
╠═════════════════════╬═══════════════════════════╬
║ Entre 18,50 e 24,99 ║ Peso normal               ║
╠═════════════════════╬═══════════════════════════╬
║ Entre 25 e 29,99    ║ Acima do peso             ║
╠═════════════════════╬═══════════════════════════╬
║ Entre 30 e 34,99    ║ Obesidade I               ║
╠═════════════════════╬═══════════════════════════╬
║ Entre 35 e 39,99    ║ Obesidade II (severa)     ║
╠═════════════════════╬═══════════════════════════╬
║ Acima de 40         ║ Obesidade III (mórbida)   ║
╚═════════════════════╩═══════════════════════════╝`;

var tableCreater = new TableCreater();
document.getElementById("infoTable").appendChild(tableCreater.createTableFromStringTable(tabela)) 