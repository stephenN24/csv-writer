"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWriter = void 0;
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
    addRows(values) {
        let rows = values.map((value) => this.formatRow(value));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRow(value) {
        // Return a string of all values separated by a comma
        return this.columns.map((col) => value[col]).join(",");
    }
}
exports.CSVWriter = CSVWriter;
