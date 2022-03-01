const { MongoClient } = require('mongodb');

// Connection URI
const uri = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbname = process.env.DB_NAME || 'myapp';

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
