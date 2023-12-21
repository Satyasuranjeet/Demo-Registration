import { MongoClient } from "mongodb";
import express from 'express';
import cors from 'cors';

const uri = "mongodb+srv://satya:Satya12345@cluster0.8thgg4a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Define the schema for the data
const dataSchema = {
  username: String,
  email: String,
  password: String,
  password2: String
};

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from Satya!" });
});

app.post('/push-data', async (req, res) => {
  const data = req.body.text;

  try {
    await client.connect();
    const database = client.db('Demo');
    const collection = database.collection('Data');
    
    // Generate a random number _id
    const _id = Math.floor(Math.random() * 100000);
  
    // Insert the data into the collection
    const result = await collection.insertOne({ _id, ...data });

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error while pushing data:", error);
    res.status(500).json({ success: false });
  } 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
