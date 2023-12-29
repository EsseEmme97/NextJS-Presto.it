import FilterForm from "@/components/FilterForm";
import DisplayAnnouncements from "@/components/announcements/DisplayAnnouncements";

export const metadata = {
  title: "Annunci",
  description:
    "benvenuti alla sezione annunci dove potrai trovare tutti gli annunci di presto",
};



export default function AnnouncementsPage({searchParams}) {
  return (
    <>
      <h1 className="font-bold text-4xl md:text-6xl text-center md:my-20">
        Cerca tra i nostri <span className="text-emerald-500">annunci</span>
      </h1>
      <FilterForm/>
      <main className="container mx-auto">
        <DisplayAnnouncements searchParams={searchParams}/>
      </main>
    </>
  );
}
