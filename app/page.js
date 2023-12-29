import MainSection from "@/components/MainSection";
import Categories from "@/components/categories/Categories";
import WorkWithUs from "@/components/workWithUs/WorkWithus";
import Announcements from "@/components/announcements/Announcements";
import Footer from "@/components/Footer";

export default async function HomePage() {
  return (
    <>
      <MainSection />
      <Categories />
      <WorkWithUs/>
      <Announcements/>
    </>
  );
}
