"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(["id", "amount", "to", "notes"]);
paymentWriter.addRows([
    { id: 1, amount: 50, to: "yoshi", notes: "for design work" },
    { id: 2, amount: 50, to: "stephoan", notes: "for dev work" },
]);
paymentWriter.save("../data/payments.csv");
