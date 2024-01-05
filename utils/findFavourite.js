import { findAllUserFavourites } from "./findAllUserFavourites";

export default async function findFavourite(itemsId){
	const allFavourites= await findAllUserFavourites();
	if(allFavourites.length == 0 ){
		return null
	} else{
		return allFavourites.filter((el)=>el["items_id"]==itemsId)[0];
	}
}

