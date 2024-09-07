/** @format */

import express from "express";
import ServerlessHttp from "serverless-http";
import newcastle from "../db/newcastle.mjs";
import brentford from "../db/brentford.mjs";
import realmadrid from "../db/realmadrid.mjs";
import barcelona from "../db/barcelona.mjs";
import tottenham from "../db/tottenham.mjs";
import liverpool from "../db/liverpool.mjs";
import mancity from "../db/mancity.mjs";
import chelsea from "../db/chelsea.mjs";
import everton from "../db/everton.mjs";
import cars from "../routes/cars.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send(200);
});

app.use("/cars", cars);
app.get("/realmadrid", (req, res) => {
  res.json(realmadrid);
});
app.post("/realmadrid/add_new", (req, res) => {
  const data = req.body;
  realmadrid.push(data);
  res.send("Your data succesfully added");
});
app.put("/r+e+a+l+m+a+d+r+i+d", (req, res) => {
  const id = req.query.id;
  const data = realmadrid.filter((data) => data.id != id);
  res.send(data);
});

app.get("/barcelona", (req, res) => {
  res.json(barcelona);
});
app.post("/barcelona/add_new", (req, res) => {
  const data = req.body;
  realmadrid.push(data);
  res.send("Your data succesfully added");
});
app.put("/b+a+r+c+e+l+o+n+a+", (req, res) => {
  const id = req.query.id;
  const data = barcelona.filter((data) => data.id != id);
  res.send(data);
});

app.get("/tottenham", (req, res) => {
  res.json(tottenham);
});
app.post("/tottenham/add_new", (req, res) => {
  const data = req.body;
  realmadrid.push(data);
  res.send("Your data succesfully added");
});
app.put("/t+o+t+t+e+n+h+a+m+", (req, res) => {
  const id = req.query.id;
  const data = tottenham.filter((data) => data.id != id);
  res.send(data);
});

app.get("/liverpool", (req, res) => {
  res.json(liverpool);
});
app.post("/liverpool/add_new", (req, res) => {
  const data = req.body;
  liverpool.push(data);
  res.send("Your data succesfully added");
});
app.put("/l+i+v+e+r+p+o+o+l+", (req, res) => {
  const id = req.query.id;
  const data = liverpool.filter((data) => data.id != id);
  res.send(data);
});

app.get("/psg", (req, res) => {
  res.json(psg);
});
app.post("/psg/add_new", (req, res) => {
  const data = req.body;
  psg.push(data);
  res.send("Your data succesfully added");
});
app.put("/p+s+g+", (req, res) => {
  const id = req.query.id;
  const data = psg.filter((data) => data.id != id);
  res.send(data);
});

app.get("/mancity", (req, res) => {
  res.json(mancity);
});
app.post("/mancity/add_new", (req, res) => {
  const data = req.body;
  psg.push(data);
  res.send("Your data succesfully added");
});
app.put("/m+a+n+c+i+t+y+", (req, res) => {
  const id = req.query.id;
  const data = mancity.filter((data) => data.id != id);
  res.send(data);
});

app.get("/chelsea", (req, res) => {
  res.json(mancity);
});
app.post("/chelsea/add_new", (req, res) => {
  const data = req.body;
  psg.push(data);
  res.send("Your data succesfully added");
});
app.put("/c+h+e+l+s+e+a+", (req, res) => {
  const id = req.query.id;
  const data = chelsea.filter((data) => data.id != id);
  res.send(data);
});

app.get("/everton", (req, res) => {
  res.json(everton);
});
app.post("/everton/add_new", (req, res) => {
  const data = req.body;
  psg.push(data);
  res.send("Your data succesfully added");
});
app.put("/e+v+e+r+t+o+n+", (req, res) => {
  const id = req.query.id;
  const data = everton.filter((data) => data.id != id);
  res.send(data);
});

app.get("/brentford", (req, res) => {
  res.json(brentford);
});
app.post("/brentford/add_new", (req, res) => {
  const data = req.body;
  psg.push(data);
  res.send("Your data succesfully added");
});
app.put("/b+r+e+n+t+f+o+r+d+", (req, res) => {
  const id = req.query.id;
  const data = brentford.filter((data) => data.id != id);
  res.send(data);
});

app.get("/newcastle", (req, res) => {
  res.json(newcastle);
});
app.post("/newcastle/add_new", (req, res) => {
  const data = req.body;
  psg.push(data);
  res.send("Your data succesfully added");
});
app.put("/n+e+w+c+a+s+t+l+e+", (req, res) => {
  const id = req.query.id;
  const data = newcastle.filter((data) => data.id != id);
  res.send(data);
});
export const handler2 = ServerlessHttp(app);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
