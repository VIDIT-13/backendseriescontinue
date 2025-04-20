class Apiresponse {
  constructor(statusCode,data,success, message='Success', data) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode<400;
    this.errors = null;
    this.stack = null;
    this.status = null;
    this.error = null;
  }
}   
export default Apiresponse;