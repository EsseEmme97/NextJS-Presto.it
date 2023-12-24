import MainSection from "@/components/MainSection";
import Categories from "@/components/categories/Categories";
import WorkWithUs from "@/components/workWithUs/WorkWithus";

export default async function HomePage() {
  return (
    <>
      <MainSection />
      <Categories />
      <WorkWithUs/>
    </>
  );
}
