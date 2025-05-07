const formatPriceBase = (price) => {
  const priceNumber = Number(price);
  if (isNaN(priceNumber)) return "Invalid price";
  const formatted = priceNumber.toLocaleString("id-ID");
  return formatted;
};
export { formatPriceBase };
