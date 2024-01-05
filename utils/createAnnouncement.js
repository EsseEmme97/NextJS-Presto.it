"use server"
const mongoose= require ("mongoose");
import { config } from "@/app/api/auth/[...nextauth]/route.js";
import { getServerSession } from "next-auth";

export default  async function createAnnouncement(state,formData){
	const connection = mongoose.createConnection(process.env.MONGODB_URI);
	const {name,category,price,type}= Object.fromEntries(formData.entries());
	const session = await getServerSession(config);
	
	const announcementsSchema = new mongoose.Schema({
	  name: String,
	  category: String,
	  price: Number,
	  type: String,
	  user:String,
	});

	const Announcement = connection.model("announcement", announcementsSchema);
	
	const newAnnouncement= new Announcement({name,category,price,type,user:session.user.email});
	try {
		await newAnnouncement.save(); 
		return state=true
	} catch (error) {
		console.log(error)
	}
}