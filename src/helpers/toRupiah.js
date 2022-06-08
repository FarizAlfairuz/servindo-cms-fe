const toRupiah = (data) => {
  const rupiah = data.toLocaleString();

  return `Rp. ${rupiah}`;
};

export default toRupiah;
