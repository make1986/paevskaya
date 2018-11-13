const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");

const config = require("./config");
const db = require("./db/connect");
const sessionStore = require("./sessionStore");

const app = express();
const http = require("http").Server(app);
const port = process.env.PORT || config.PORT;

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,POST,DELETE,PUT,OPTIONS",
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, authorization"
  })
);
//
db.setUpConnect();
//
app.use(
  session({
    secret:
      "Hello,developer,thisIsMySecret!No-no-no,please,dontRemoveMeAndDontEditMe!1100000100%001!Oooops!00011100GoodBeeeeee!",
    resave: false,
    key: "sid",
    saveUninitialized: false,
    store: sessionStore
  })
);

// app.use("/", express.static(path.join(__dirname, "../client/build")));
// app.use("/admin", express.static(path.join(__dirname, "../admin/build")));

http.listen(port, () => console.log(`Listening on port ${port}`));
