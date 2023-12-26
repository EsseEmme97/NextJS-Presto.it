const getAnnouncements= require ("@/utils/getAnnouncements");
import Announcement from "./Announcement";

export default async function DisplayAnnouncements(){
	const data= await getAnnouncements();
	return (<div className="flex flex-wrap gap-4 justify-center">
		{data.splice(0,8).map((el)=><Announcement key={el.id} title={el.name} category={el.category} price={el.price} state={el.type}/>)}
	</div>)
}