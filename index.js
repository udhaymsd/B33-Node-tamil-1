// const express = require('express') // 3rd paty package "type": "common js" 
import express from "express"; //"type": "module"
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

// console.log(process.env);

const app = express();

const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://127.0.0.1"; -   V4
// const MONGO_URL = "mongodb://127.0.0.1"; // - V5
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL); // phone dial
  await client.connect(); // call button
  console.log("Mongo is connected");
  return client;
  
}

const client = await createConnection();

// express.json() - middleware (inbulit) -> body -> for converting data as json format
//All api will be intercepted and middleware will be run
app.use(express.json());




app.get('/', function (req, res) {
  res.send('Hello World udhaya FSD sde')
})

// movies -> MovieList
app.get("/movies", async function (req, res) {
  console.log(req.query);
  //db.movies.find({name: "})

if (req.query.rating) {
  req.query.rating = + req.query.rating;
}

console.log(req.query);

  // Cursor -> Pagination | Cursor -> Array (for converting find details as Array) | toArray
  const movies = await client
  .db("b33we")
  .collection("movies")
  .find(req.query).toArray();
  // res.send(name ? movies.filter((mv) => mv.name === name) : movies);
  res.send(movies);
});

//movies //102

app.get("/movies/:id", async function (req, res) {
 const {id}=req.params;
//db.movies.findOne({id: "105"})
const movie = await client.db("b33we").collection("movies").findOne({id: id});
// const movie = movies.find(mv => mv.id === id);
movie ? res.send(movie) : res.status(404).send({msg: "movie not found"});
});

//Create movies

app.post("/movies", async function (req, res) {
  const movies = req.body;
  console.log(movies); 
 //db.movies.insertMany(movies)
 const result = await client.db("b33we").collection("movies").insertMany(movies);
  res.send(result);
});





//delete //102

app.delete("/movies/:id", async function (req, res) {
  const {id}=req.params;
 //db.movies.deleteOne({id: "102"})
 const result = await client.db("b33we").collection("movies").deleteOne({id: id});
 // const movie = movies.find(mv => mv.id === id);
 result.deletedCount > 0 ? res.send({msg: "Movie deleted successfully "}) : res.status(404).send({msg: "movie not found"});
 });


//Update

 app.put("/movies/:id", async function (req, res) {
  const {id}=req.params;
  const data = req.body;

  console.log(id, data);

//  //db.movies.updateOne({id: id}, {$set: data})

 const result = await client.db("b33we").collection("movies").updateOne({id: id},{$set: data});
 console.log(result);

 res.send(result);
 });



 app.listen(PORT, () => console.log(`The server started in:${PORT}`));