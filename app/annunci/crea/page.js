import CreateAnnouncement from "@/components/CreateAnnouncement";

export const metadata = {
	title: "crea annuncio",
	description:
	  "crea il tuo annuncio personalizzato",
  };


  export default async function createAnnouncements(){
	return (<>
	<CreateAnnouncement/>
	</>)
		
  }
