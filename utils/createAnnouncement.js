"use server"
const mongoose= require ("mongoose")

export default  async function createAnnouncement(state,formData){
	const connection = mongoose.createConnection(process.env.MONGODB_URI);
	const {name,category,price,type}= Object.fromEntries(formData.entries());
	

	const announcementsSchema = new mongoose.Schema({
	  name: String,
	  category: String,
	  price: Number,
	  type: String,
	});

	const Announcement = connection.model("announcement", announcementsSchema);
	
	const newAnnouncement= new Announcement({name,category,price,type});
	try {
		await newAnnouncement.save();
		return state=true
	} catch (error) {
		console.log(error)
	}
}