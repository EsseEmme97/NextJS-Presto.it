const mongoose= require("mongoose")
const bcrypt= require("bcrypt")

async function checkUser(credentials){
	try {
		const connection=  mongoose.createConnection(process.env.MONGODB_URI);
		const  userSchema= new mongoose.Schema({
			email:String,
			password:String
		})
		const Users= connection.model("User",userSchema);
		const myUser= await Users.findOne({email:credentials.email}).exec();

		if(myUser){
			const match= await bcrypt.compare(credentials.password,myUser.password)
			return match ? myUser : null;
		} else{
			const hashedPssw= await bcrypt.hash(credentials.password,10);
			const newUser= new Users({email:credentials.email, password:hashedPssw});
			newUser.save();
			return newUser;
		}
	} catch (error) {
		console.log(error,"connection not established")
	}

	connection.close();
	
}

module.exports=checkUser;