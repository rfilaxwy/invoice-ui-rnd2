const express = require("express");
const cors = require("cors");
const fs = require("file-system");

const app = express();

const port = process.env.PORT || 3001;

const companyInvoices = JSON.parse(
  fs.readFileSync("./data/invoices.json", "utf8")
);
app.use(cors());

app.listen(port, () => {
  console.log("listening on 3001");
});
app.get("/api/invoice/:id", (req, res) => {
  let returnInvoices,
    greatestInvoiceNumber = null;
  if (req.params.id) {
    for (let i = 0; i < companyInvoices.length; i++) {
      if (companyInvoices[i]["invoiceNumber"] === req.params.id) {
        returnInvoices = companyInvoices[i];
      }
    }
  } else {
    for (let invoice in companyInvoices) {
      if (
        greatestInvoiceNumber == null ||
        invoice["id"] > greatestInvoiceNumber
      ) {
        greatestInvoiceNumber = invoice["id"];
      }
    }
  }
  if (returnInvoices) {
    res.status(200).send({ data: returnInvoices });
  }
  res.status(200).send({ data: { newInvoiceId: greatestInvoiceNumber } });
});
