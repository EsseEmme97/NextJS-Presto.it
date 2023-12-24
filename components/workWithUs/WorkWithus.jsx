import Image from "next/image";
import workImg from "@/assets/workWithUs.jpg";
import Form from "./Form";

export default function WorkWithUs(){
	return (<section className="container mx-auto bg-slate-100 p-8 flex rounded mt-12">
		<Image src={workImg}  alt="work with us" sizes="(min-width: 768px) 50%, 100%" className="w-1/2 rounded-lg"/>
		<Form/>
	</section>)
}