exports.handleError = res => (error) => {
  console.log(error.message);
  return res.send(500, { error: error.message });
};
