const https = require("https");
const options = {
  hostname: "api.postalpincode.in",
  port: 443,
  path: "/pincode/500001",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  let str;

  res.on("data", function (chunk) {
    str += chunk;
  });

  res.on("end", function () {
    // console.log(req.data);
    console.log(str);
    // your code here if you want to use the results !
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
