const express = require("express");
const mongoose = require("mongoose");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const Controller = require("./controller");

mongoose.connect("mongodb://localhost:27017/crud", { useNewUrlParser: true });

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    // server.post("/api/movies/", Controller.addItem);

    server.route("/api/movies/").post(Controller.addItem).delete(Controller.deleteItems);
    server.route("/api/movies/:id").delete(Controller.deleteItem).patch(Controller.updateItem);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });

    module.exports = Model;
  })
  .catch((ex) => {
    console.log(error(ex.stack));
    process.exit(1);
  });
