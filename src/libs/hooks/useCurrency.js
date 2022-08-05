const useCurrency = () => {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return currency;
};

export default useCurrency;
