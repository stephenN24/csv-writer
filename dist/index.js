"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = "\n";
        console.log("file saved to", filename);
    }
    addRows(payments) {
        let rows = payments.map((payment) => this.formatRow(payment));
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
writer.save("../data/payments.csv");
writer.addRows([
    { id: 1, amount: 50, to: "yoshi", notes: "for design work" },
    { id: 2, amount: 50, to: "stephen", notes: "for dev work" },
]);
writer.save("../data/payments.csv");
