const { token } = require("morgan");
const { ResetPinSchema } = require("./RestPin.schema");

const { randomPinNumber } = require("../../utils/randomGenerator");

const setPasswordRestPin = async (email) => {
  //reand 6 digit
  const pinLength = 6;
  const randPin = await randomPinNumber(pinLength);

  const restObj = {
    email,
    pin: randPin,
  };

  return new Promise((resolve, reject) => {
    ResetPinSchema(restObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

module.exports = {
  setPasswordRestPin,
};
