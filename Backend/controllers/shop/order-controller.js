const createOrder = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      massage: "some error occured",
    });
  }
};

const capturePayment = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      massage: "some error occured",
    });
  }
};

module.exports = { createOrder, capturePayment };
