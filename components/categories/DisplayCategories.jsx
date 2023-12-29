import auto from "@/assets/cars.svg";
import laptop from "@/assets/laptop.svg";
import motor from "@/assets/motor.svg";
import shirt from "@/assets/shirt.svg";
import sport from "@/assets/sport.svg";
import leaf from "@/assets/leaf.svg";
import home from "@/assets/home.svg";
import flame from "@/assets/flame.svg";
import Category from "./Category";

let categories = [
    {name: 'Auto' , icon: auto , announcementsCount : 123},
    {name: 'Elettronica' , icon: laptop , announcementsCount : 564},
    {name: 'Moto' , icon: motor , announcementsCount : 230},
    {name: 'Abbigliamento' , icon: shirt, announcementsCount : 321},
    {name: 'Sport' , icon: sport , announcementsCount : 90},
    {name: 'Giardinaggio' , icon: leaf , announcementsCount : 50},
    {name: 'Casa' , icon: home, announcementsCount : 134},
    {name: 'Cucina' , icon: flame , announcementsCount : 176},
];


export default function DisplayCategories (){
	return <div className=" flex flex-wrap gap-4 justify-center">
		{categories.map((el,index)=><Category key={index} src={el.icon} title={el.name} count={el.announcementsCount}/>)}
	</div>
}