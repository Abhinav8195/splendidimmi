const mongoose= require("mongoose");
const url = "mongodb+srv://Manshu:1234@cluster0.x9kfoex.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Add this line to avoid deprecation warning
  })
  
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });