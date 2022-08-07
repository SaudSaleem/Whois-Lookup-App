const { spawn } = require("child_process");

const whois = (args) => {
  return new Promise((resolve, reject) => {
    const whois = spawn("whois", args);
    whois.stdout.on("data", async (data) => {
      if (domainExist(data.toString())) {
        const payload = extractDomainInfo(data.toString());
        resolve(payload);
      } else {
        reject({
          message: "Domain not exist or invalid arguments",
          error: true,
        });
      }
    });
  });
};

const extractDomainInfo = (data) => {
  const rawData = data;
  data = data.split(/\r?\n/);
  let resultObject = {};
  try {
    //extract registration_date, updated_date, expiry_date of particular domain from raw data
    data.forEach((item) => {
      let [key, ...value] = item.split(":");
      value = value.toString().trim().replace(/,/g, ":");
      if (key && value) {
        resultObject[key.trim()] = value.toString().trim();
      }
    });

    resultObject = {
      error: false,
      registration_date: new Date(resultObject["Creation Date"]),
      updated_date: new Date(resultObject["Updated Date"]),
      expiry_date: new Date(
        resultObject["Registrar Registration Expiration Date"]
      ),
      rawData, //raw data in JSON format
    };
  } catch (e) {
    resultObject = {
      e,
      error: true,
      message: "Invalid arguments",
    };
  }

  return resultObject;
};
const domainExist = (domain) => {
  return domain.includes("No match for domain") ? false : true;
};

module.exports = {
  whois,
};
