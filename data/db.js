const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "chatapp";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  client.close();
});

const db = client.db(dbName);

const insertDocuments = function(db, data) {
  // Get the documents collection
  const collection = db.collection("messages");
  // Insert some documents
  collection.insertOne({ msg: data });
};

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("messages");
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
  });
};

exports.db = db;
exports.insert = insertDocuments;
