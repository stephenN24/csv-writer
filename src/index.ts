import { appendFileSync } from "fs";

export class CSVWriter<T> {
  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(",") + "\n";
  }

  private csv: string;

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = "\n";
    console.log("file saved to", filename);
  }

  addRows(values: T[]): void {
    let rows = values.map((value) => this.formatRow(value));

    this.csv += rows.join("\n");

    console.log(this.csv);
  }

  private formatRow(value: T): string {
    // Return a string of all values separated by a comma
    return this.columns.map((col) => value[col]).join(",");
  }
}
