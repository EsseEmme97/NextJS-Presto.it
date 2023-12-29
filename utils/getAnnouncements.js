const mongoose = require("mongoose");
import {cache} from "react"

const getAnnouncements= cache(async ()=> {
  const connection = mongoose.createConnection(process.env.MONGODB_URI);
  const announcementsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    price: Number,
    type: String,
  });

  const Announcement = connection.model("announcement", announcementsSchema);

  try {
    const data = await Announcement.find({});
    return data;
  } catch (error) {
    console.log(error);
  }

  connection.close();
})

module.exports = getAnnouncements;
