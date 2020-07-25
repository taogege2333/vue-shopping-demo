const bodyParser = require("body-parser");
const { SuccessModel, ErrorModel } = require("./data/model");
const { homeData, userData } = require("./data/index");

module.exports = {
  devServer: {
    open: true,
    before(app) {
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));
      // 首页数据api
      app.get("/api/home", (req, res) => {
        res.json(new SuccessModel(homeData));
      });
      // 详情页数据api
      app.get("/api/detail", (req, res) => {
        const id = req.query.id || null;
        if(id) {
          for(let key in homeData.goodsList) {
            const item = homeData.goodsList[key];
            if(item.id === id) {
              res.json(new SuccessModel(item));
            }
          }
        }
      })
      // 登录api
      app.post("/api/login", (req, res) => {
        const {username, password} = req.body;
        if(username === "王小明" && password === "123456") {
          res.json(new SuccessModel(userData));
        } else {
          res.json(new ErrorModel("登陆失败"));
        }
      })
    }
  }
}