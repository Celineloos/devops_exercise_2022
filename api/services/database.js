const { MongoClient } = require('mongodb');
const promClient = require('prom-client');

const gauge = new promClient.Gauge({ name: 'number_of_database_connections', help: 'number of database connections' });

// Connection URI
const uri = process.env.MONGO_URL;
const dbname = process.env.DB_NAME;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  client,
  async getDb() {
    return new Promise((resolve, reject) => {
      if (!dbConnection) {
        console.log('Opening connection');
        client.connect((err, db) => {
          gauge.inc(1);
          if (err || !db) {
            reject(err);
          }
          dbConnection = db.db(dbname);
          console.log('Successfully connected to MongoDB.');

          resolve(dbConnection);
        });
      } else {
        resolve(dbConnection);
      }
    });
  },
};
