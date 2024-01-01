"use server"

import findFavourite from "./findFavourite";
import { favouritesSchema } from "./findAllUserFavourites";
const mongoose= require("mongoose")

export default async function AddToFavourites(prevState,formData){
	const itemsId= formData.get("itemsId");
	const email= formData.get("email")
	const favourite= await findFavourite(itemsId);
	const connection= mongoose.createConnection(process.env.MONGODB_URI);
	const Favourite= connection.model("favourite", favouritesSchema);

	if (favourite!==null && favourite!== undefined){
		await Favourite.deleteOne({items_id:String(itemsId)})		
		return prevState=false
	} else{
		const newFavourite= new Favourite({items_id:itemsId, user:email, isFavourite:true})
		newFavourite.save()
		return prevState=true
	}
}