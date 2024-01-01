const mongoose = require("mongoose");
import { cache } from "react";
import { getServerSession } from "next-auth";
import { config } from "@/app/api/auth/[...nextauth]/route.js";

const favouritesSchema = new mongoose.Schema({
  items_id: String,
  user: String,
  isFavourite: Boolean,
});

const findAllUserFavourites = cache(async () => {
  const connection = mongoose.createConnection(process.env.MONGODB_URI);
  const session = await getServerSession(config);

  const Favourite = connection.model("favourite", favouritesSchema);

  try {
    const allFavourites = await Favourite.find({ user: session.user.email });
    return allFavourites;
  } catch (error) {
    console.log(error);
  } finally{
    connection.close();
  }
});

export { findAllUserFavourites, favouritesSchema };
