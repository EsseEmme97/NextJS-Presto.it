import Image from "next/image"

export default function Category(props){
	return (
		<article className="p-4 rounded shadow border border-dashed border-emerald-500 w-3/4  md:w-1/5 text-center">
			<Image src={props.src} width={48} height={48} alt="category-image" className="p-2 rounded-full mx-auto border border-dashed border-emerald-500"/>
			<h2 className="mt-4 font-bold text-lg">{props.title}</h2>
			<p className="text-emerald-500 my-4">{props.count}</p>
		</article>
	)
}