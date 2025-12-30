function status(req, res) {
  res.status(200).json({ status: 'Acima da média' });
}

export default status;