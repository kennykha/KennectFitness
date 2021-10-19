const db = require("../database/index");

//Serverless always needs event and context arguments
const getUsers = (event, context, callback) => {
  db.getUsers((err, result) => {
    if (err) {
      callback(err);
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify(result),
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
      callback(null, response);
    }
  });
};

const getUser = (event, context, callback) => {
  //   console.log(event);
  //   console.log(context);
  db.getWorkouts(event.queryStringParameters.name, (err, result) => {
    if (err) {
      callback(err);
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify(result),
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
      callback(null, response);
    }
  });
};

const addUser = (event, context, callback) => {
  db.addUser(event.queryStringParameters.name, (err, result) => {
    if (err) {
      callback(err);
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify(result),
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
      callback(null, response);
    }
  });
};

module.exports = { getUsers, addUser, getUser };
