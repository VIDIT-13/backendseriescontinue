// const asynchandler = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch((err) => {
//     console.log(err);
//     res.status(500).json({ message: err.message });
//   });
// }
const asynchandler = (fn) => async(req,res,next) => {
    try {
        await fn(req,res,next);
    }
    catch (error) {
        console.log(error);
        res.status(500 || error.code).json({ success:false, message: error.message });
    }
  //   // Call the function and handle any errors
}
  //     console.error('Error occurred:', error);
  //     throw error; // Rethrow the error to stop execution
  //   });
  // })()//iffies immedaitealy invoked function expression
;
export default asynchandler;
// module.exports = asynchandler;
// module.exports = asynchandler;