exports.handleError = (res, error) => {
  console.error('error', error);
  return res.status(500).send(error);
};
