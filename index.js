require('dotenv').config();

const server = require('./api/server.js');
const port = process.env.PORT || 4000;

server.listen(4000, () => {
  console.log(`\n*** Server Running on ${port} ***\n`);
});
//! when running locally the IP is taking care of my localHost!!!
//! and we can hard code any old port(over 3000) in


//! when deploying
//! heroku will assign an Ip address
//! we can't hard code in the port
//! heroku needs to tell us which port
//! (because it might be taken) 