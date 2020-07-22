const DataModel = require("./data/model");
const { homeData } = require("./data/index");

module.exports = {
  devServer: {
    open: true,
    before(app) {
      app.get("/api/home", (req, res) => {
        res.json(new DataModel(homeData));
      });
      for(let i = 0; i < homeData.goodsList.length; i++) {
        const item = homeData.goodsList[i];
        app.get("/api/detail/" + item.id, (req, res) => {
          res.json(new DataModel(item));
        })
      }
    }
  }
}