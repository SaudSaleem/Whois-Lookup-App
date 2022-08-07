const domainHelper = require("./helpers");

const lookup = async (args) => {
  if (Array.isArray(args)) {
    try {
      const data = await domainHelper.whois(args);
      return data;
    } catch (error) {
      return error;
    }
  } else {
    return { message: "The 'args' argument must be a Array", error: true };
  }
};

module.exports = lookup;
