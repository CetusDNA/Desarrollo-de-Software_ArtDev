const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb+srv://edna:1234titi@cluster0.munvd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}
module.exports = mongoose;
