const bodyParser = require("body-parser");
const { SuccessModel, ErrorModel } = require("./data/model");
const { homeData, userData, addressList } = require("./data/index");
global.homeData = homeData;
global.userData = userData;
global.addressList = addressList;

module.exports = {
  devServer: {
    before(app) {
      const { homeData, userData, addressList } = global;
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));
      // 深度解析req.body
      app.use("*", (req, res, next) => {
        for(let k in req.body) {
          req.body[k] = JSON.parse(req.body[k]);
        }
        next();
      });
      // 首页数据api
      app.get("/api/home", (req, res) => {
        res.json(new SuccessModel(homeData));
      });
      // 详情页数据api
      app.get("/api/detail", (req, res) => {
        const id = req.query.id || null;
        if (id) {
          for (let key in homeData.goodsList) {
            const item = homeData.goodsList[key];
            if (item.id === id) {
              res.json(new SuccessModel(item));
            }
          }
        }
      });
      // 登录api
      app.post("/api/login", (req, res) => {
        const { username, password } = req.body;
        if (username === "王小明" && password === "123456") {
          res.json(new SuccessModel(userData));
        } else {
          res.json(new ErrorModel("登陆失败"));
        }
      });
      // 获取收货信息列表
      app.get("/api/addressList", (req, res) => {
        res.json(new SuccessModel(addressList));
      });
      // 获取收货信息详情
      app.get("/api/addressDetail", (req, res) => {
        const { id } = req.query;
        for(let key in addressList) {
          if(id === addressList[key].id) {
            res.json(new SuccessModel(addressList[key]));
          }
        }
      });
      // 修改收货信息
      app.post("/api/updateAddress", (req, res) => {
        const { addressDetail } = req.body;
        for(let key in addressList) {
          if(addressDetail.id === addressList[key].id) {
            global.addressList[key] = addressDetail;
            res.json(new SuccessModel("修改成功"));
          }
        }
      });
      // 添加收货信息
      app.post("/api/addAddress", (req, res) => {
        const { addressDetail } = req.body;
        addressDetail.id = (Number(global.addressList[global.addressList.length - 1].id) + 1) + "";
        global.addressList.push(addressDetail);
        res.json(new SuccessModel("添加成功"));
      });
      // 删除收货信息
      app.post("/api/deleteAddress", (req, res) => {
        const { id } = req.body;
        for(let key in addressList) {
          if(id === addressList[key].id) {
            global.addressList.splice(key, 1);
            res.json(new SuccessModel("删除成功"));
          }
        }
      });
    }
  }
};
