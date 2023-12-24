import DisplayCategories from "./DisplayCategories"

 
export default async function Categories () {
	return (
		<section className="mt-12 container mx-auto">
			<h2 className="text-4xl text-center md:text-6xl font-bold">Le nostre <span className="text-emerald-500">Categorie</span></h2>
			<p className="text-slate-400 text-center mt-4 md:w-3/4 md:mx-auto my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id diam sem. Etiam sed ipsum ante. Donec quis tempor arcu. Fusce posuere, turpis vitae pellentesque tempus, risus tellus semper ligula, ac consectetur ante quam vitae urna. Cras pretium finibus neque vitae pulvinar. Morbi sapien felis, vestibulum at ipsum eget, varius.</p>
			<DisplayCategories/>
		</section>
	)
}