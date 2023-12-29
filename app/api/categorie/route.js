import getAnnouncements from "@/utils/getAnnouncements"

export async function GET () {
	const response= await getAnnouncements();
	const categories= [...new Set(response.map((el)=>el.category))];
	return Response.json(categories);
}