class TableItem {
    constructor(value, rowspan = 1, colspan = 1) {
        this.value = value;
        this.rowspan = rowspan;
        this.colspan = colspan
    }
}

class TablePreConfiguredItens {

    tableItens = []

    constructor(tableItens) {
        this.tableItens = tableItens
        this.itemHasConfiguration.bind(this)
        this.getConfiguredTableItem.bind(this)
    }

    itemHasConfiguration = (value) => {
        let itemHasConfiguration = false
        this.tableItens.forEach(i => {
            if (value.toUpperCase().includes(i.value.toUpperCase())) {
                itemHasConfiguration = true
                return
            }
        })
        return itemHasConfiguration
    }

    getConfiguredTableItem = (value) => {
        let item = undefined
        this.tableItens.forEach(i => {
            if (value.toUpperCase().includes(i.value.toUpperCase())) {
                item = i
                return
            }
        })
        return item
    }
}

function TableCreater() {

}

TableCreater.prototype.createTable = function (headers, rows) {
    let table = document.createElement("table")
    let headerTr = document.createElement("tr")

    table.appendChild(headerTr);

    headers.forEach(h => {
        let header = document.createElement("th")
        header.innerHTML += h.value
        header.setAttribute("colspan", h.colspan)
        header.setAttribute("rowspan", h.rowspan)
        headerTr.appendChild(header)
    });

    rows.forEach(row => {
        let valuesTr = document.createElement("tr")
        table.appendChild(valuesTr);
        row.forEach(v => {
            let value = document.createElement("td")
            value.innerHTML += v.value
            value.setAttribute("colspan", v.colspan)
            value.setAttribute("rowspan", v.rowspan)
            valuesTr.appendChild(value)
        })
    })

    return table;
}

TableCreater.prototype.parseTableIntoArray = function (stringTable) {
    var stringList = stringTable.split('║')
    let rows = [];
    let row = []

    stringList.forEach(m => {
        let lastWasNonValue = false
        if (m.includes("═")) {
            if (lastWasNonValue == false) {
                if (row.length > 0) {
                    rows.push(row)
                    row = [];
                }
            }
            lastWasNonValue = true
        } else {
            row.push(m.trim())
        }
    })
    return rows;
};

TableCreater.prototype.createTableFromStringTable = function (stringTable, preConfiguredItens = undefined) {
    let headers = []
    let rowArray = []
    let rows = this.parseTableIntoArray(stringTable)

    rows.forEach(row => {
        if (rows.indexOf(row) == 0) {

            row.forEach(h => {
                if (preConfiguredItens == undefined) {
                    headers.push(new TableItem(h))
                }
                else {
                    if (preConfiguredItens.itemHasConfiguration(h)) {
                        headers.push(preConfiguredItens.getConfiguredTableItem(h))
                    }
                    else {
                        headers.push(new TableItem(h))
                    }
                }
            })
            return
        }

        var rowItemArray = []
        row.forEach(r => {
            if (preConfiguredItens == undefined) {
                rowItemArray.push(new TableItem(r))
            }
            else {
                if (preConfiguredItens.itemHasConfiguration(r)) {
                    rowItemArray.push(preConfiguredItens.getConfiguredTableItem(r))
                } else {
                    rowItemArray.push(new TableItem(r))
                }
            }
        })
        rowArray.push(rowItemArray)
    })

    return this.createTable(headers, rowArray);
}
