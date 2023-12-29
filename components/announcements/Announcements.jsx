import DisplayAnnouncements from "./DisplayAnnouncements";
import Link from "next/link";

export default function Announcements () {
	return (<section className="container mt-12 mx-auto">
			<h2 className="text-4xl md:text-6xl font-bold text-center">Gli ultimi <span className="text-emerald-500">Annunci</span></h2>
			<p className="text-slate-400 text-center mt-4 md:w-3/4 md:mx-auto my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id diam sem. Etiam sed ipsum ante. Donec quis tempor arcu. Fusce posuere, turpis vitae pellentesque tempus, risus tellus semper ligula, ac consectetur ante quam vitae urna. </p>
			<DisplayAnnouncements/>
			<h3 className="my-10 font-bold text-4xl text-center transition-transform duration-200 hover:scale-105"><Link href="/annunci">Visualizza altri <span className="text-emerald-500">annunci</span></Link></h3>
	</section>)
}