function status(request, response) {
  response.status(200).json({ status: "testando endpoint api" });
}

export default status;
