const home = (req, res) => {
  res.status(200).json({ alive: "true" });
};

const donation = (req, res) => {
  const data = req.body;
  let re = /\S+@\S+\.\S+/;
  const devicesTypes = [
    "notebook",
    "desktop",
    "netbook",
    "monitor",
    "impressora",
    "scanner",
  ];

  // Verificando se tem campo faltando no body
  if (Object.keys(data).length != 12) {
    res.status(400).json({
      error: true,
      requiredFields:
        "[name, email, phone, zip, city, state, streetAdress, number, complement, neighborhood, deviceCount, devices]",
      errorMessage: "Todos os campos obrigatórios devem ser informados",
    });
  }

  // Validando formato do email
  if (!re.test(data.email)) {
    res.status(400).json({ error: "Email invalido!" });
  }

  // Validando se a quantidade de devices é válida
  if (data.deviceCount != data.devices.length) {
    res.status(400).json({
      error: true,
      errorMessage:
        "A quantidade de equipamentos ({$deviceCount}) não está de acordo com as informações de equipamentos enviados ({$devices})",
    });
  }

  /* PRECISA IMPLEMENTAR VERIFICAÇÃO DOS DEVICES */
  res.status(200).json({ sucess: "true" });
};

module.exports = {
  home,
  donation,
};
