const getAnnouncements = require("@/utils/getAnnouncements");
import Announcement from "./Announcement";

export default async function DisplayAnnouncements({ limit = false, searchParams }) {
  let data = await getAnnouncements();

  if (limit) {
    data = data.slice(0, 8);
  }

  if (searchParams !== undefined) {
    const { field, categoria, min, max } = searchParams;

    data = data.filter((el) => {
		return (
		  (field === undefined || el.name.toLowerCase().includes(field)) &&
		  (categoria === undefined || el.category === categoria) &&
		  (min === undefined || el.price >= min) &&
		  (max === undefined || el.price <= max)
		);
	  });
	}

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data.length!==0?data.map((el) => (
        <Announcement
          key={el.id}
          id={el.id}
          title={el.name}
          category={el.category}
          price={el.price}
          state={el.type}
        />
      )):<h2 className="font-bold text-6xl my-12"> Nessun risultato ottenuto</h2>}
    </div>
  );
}
