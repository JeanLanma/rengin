export const hasDarkMode = () => {
  if (window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

export const Taxes = (price, tax = null) => {
  const defaultTax = {
    'iva': 0.16,
    'municipal': 0.03
  }

  const iva = tax?.iva ?? defaultTax.iva;
  const municipal = tax?.municipal ?? defaultTax.municipal;
  return {
    iva: price * iva,
    municipal: price * municipal,
    getTotalTaxes: iva + municipal,
    getTotalPrice: price + ((price * iva) + (price * municipal)),
    getOnlyTaxes: ((price * iva) + (price * municipal)).toFixed(2),
    getTaxes: {
      iva: price * iva,
      municipal: price * municipal
    }
  };
}