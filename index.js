const lib = require('./lib');
let data;

// Lambda function index.handler - thin wrapper around lib.authenticate
module.exports.handler = async (event, context, callback) => {
  try {
    console.log("Event: ", event)
    data = await lib.authenticate(event);
    console.log("Data: ", data)
  }
  catch (err) {
      console.log(err);
      return context.fail("Unauthorized");
  }
  return data;
};
