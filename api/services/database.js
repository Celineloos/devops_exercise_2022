const { MongoClient } = require('mongodb');

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

        console.log(dbname);
        console.log(uri);

        client.connect((err, db) => {
          if (err || !db) {
            reject(err);
          }
          console.log(db);

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
