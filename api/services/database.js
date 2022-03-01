const { MongoClient } = require('mongodb');

// Connection URI
const uri = process.env.MONGO_URL;

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
        console.log(process.env.DB_NAME);

        client.connect((err, db) => {
        console.log(db);

          if (err || !db) {
            reject(err);
          }
          dbConnection = db.db(process.env.DB_NAME);
          console.log('Successfully connected to MongoDB.');
          console.log('Test');

          resolve(dbConnection);
        });
      } else {
        resolve(dbConnection);
      }
    });
  },
};
