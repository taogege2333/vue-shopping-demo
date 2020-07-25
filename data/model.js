class DataModel {
  constructor(data) {
    this.result = data;
  }
}
class SuccessModel extends DataModel {
  constructor(data) {
    super(data);
    this.code = 1;
    this.message = "success";
  }
}
class ErrorModel extends DataModel {
  constructor(data) {
    super(data);
    this.code = 0;
    this.message = "error";
  }
}
module.exports = {
  SuccessModel,
  ErrorModel
};