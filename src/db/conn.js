const mongoose = require("mongoose");
const DB = 'mongodb://SaadMalik:saad03212710920@ac-yvtqk1o-shard-00-00.124ticf.mongodb.net:27017,ac-yvtqk1o-shard-00-01.124ticf.mongodb.net:27017,ac-yvtqk1o-shard-00-02.124ticf.mongodb.net:27017/fyp-backend?ssl=true&replicaSet=atlas-1kcbyc-shard-0&authSource=admin&retryWrites=true&w=majority'
// 'mongodb+srv://SaadMalik:saad03212710920@cluster0.124ticf.mongodb.net/fyp-backend?retryWrites=true&w=majority'
mongoose
  .connect(DB)
  .then(() => {
    console.log("Successfully");
  })
  .catch(() => {
    console.log("No Connection");
  });

//"mongodb://localhost:27017/fyp-database"//