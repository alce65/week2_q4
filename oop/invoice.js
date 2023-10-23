function Invoice(nif, concept, base) {
  this.nif = nif;
  this.concept = concept;
  this.base = Number(base);
}

Invoice.prototype.iva = 1.22;
Invoice.prototype.total = function () {
  return this.base * this.iva;
};

const invoice1 = new Invoice('7678485474', 'No lo se', 23);

console.log(invoice1);
console.log(invoice1.total());
