import getAnnouncements from "@/utils/getAnnouncements";
import Image from "next/image";
import AddToFavourites from "@/components/AddToFavourites";
import findFavourite from "@/utils/findFavourite";

export async function generateMetadata({ params }) {
  const data = await getAnnouncements();
  const myAnnouncement = data.filter((el) => el["_id"] == params.id)[0];
  return {
    title: myAnnouncement.name,
    description:
      "benvenuti alla sezione singolo annuncio dove potrai visionare l'annuncio selezionato",
  };
}

export default async function SingleAnnouncement({ params }) {
  const data = await getAnnouncements();
  const myAnnouncement = data.filter((el) => el["_id"] == params.id)[0];
  
  const favourite= await findFavourite(params.id);

  return (
    <section className="container mx-auto md:flex mt-8">
      <Image
        src="https://picsum.photos/1080"
        width={200}
        height={200}
        alt="announcement Image"
        className="w-full md:w-1/2 rounded"
      />
      <div className="md:w-1/2 md:ps-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl md:text-6xl mt-8 md:mt-0">
            {myAnnouncement.name}
          </h1>
          <AddToFavourites favourite={favourite?.isFavourite ?? false} itemsId={myAnnouncement["_id"].toHexString()}/>
        </div>
        <h2 className="text-2xl text-slate-400 mt-4">
          {myAnnouncement.category}
        </h2>
        <span className="text-2xl font-bold text-emerald-500 mt-4 block">
          {myAnnouncement.price} €
        </span>
      </div>
    </section>
  );
}
