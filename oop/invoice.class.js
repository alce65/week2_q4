export class Invoice {
  static iva = 1.22;
  static irpf = 0.25;

  static invoiceCounter = 0;
  static count() {
    this.invoiceCounter++;
  }

  nif;
  concept;
  #base;

  constructor(nif, concept, base) {
    this.nif = nif;
    this.concept = concept;
    this.#base = Number(base);
    Invoice.count();
  }

  get base() {
    return this.#base;
  }

  set base(value) {
    this.#base = value;
  }

  total() {
    return this.#base * Invoice.iva;
  }
}

// Estilo antiguo Invoice.iva = 1.22;

const invoice1 = new Invoice('7678485474', 'No lo se', 23);
invoice1.base = 26;

console.log(invoice1);
console.log(invoice1.total());
console.log(invoice1.base);
console.log('IVA', Invoice.iva);
const invoice2 = new Invoice('7678485474', 'No lo se', 23);
console.log(invoice2);
console.log(Invoice.invoiceCounter);
