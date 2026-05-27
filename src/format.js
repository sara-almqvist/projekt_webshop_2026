const formatSEK = (value) => {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(value)
    .replace(/\s/g, ' '); // Ersätter med hårt mellanslag så radbrytning undviks
};

export default formatSEK;
