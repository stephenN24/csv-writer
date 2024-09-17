"use strict";
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    addRows(values) {
        let rows = values.map((value) => this.formatRow(value));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRow(payment) {
        // Return a string of all payment values separated by a comma
        return this.columns.map((col) => payment[col]).join(",");
    }
}
const writer = new CSVWriter(["id", "amount", "to", "notes"]);
writer.addRows([
    { id: 1, amount: 50, to: "yoshi", notes: "for design work" },
    { id: 2, amount: 50, to: "stephen", notes: "for dev work" },
]);
