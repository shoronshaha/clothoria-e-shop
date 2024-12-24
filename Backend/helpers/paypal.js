const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AWRHLwg6BKTNVxb7DdfSQTM5Tgr3VIJM5IVm7ZjtT60jqSiQ_LefluRKHIv4CTXGogfdDvW5z1M1sFMb",
  client_secret:
    "ELddQ2uf4-sM2-QVOL2KXWxYR4Sx3T2gVrligVih_-S85AmBQRYE2o_8mwmRTbtjLSKe5-Mm5U33q7jd",
});

module.exports = paypal;
