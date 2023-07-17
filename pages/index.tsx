import Preview from "@/components/homepage/preview/preview";
import HomepageIntro from "@/components/homepage/intro/homepageIntro";
import FeedbackCarousel from "@/components/homepage/feedback/feedback";
import Info from "@/components/homepage/info";
import BlogInfo from "@/components/homepage/blog/blogInfo";
import Faq from "@/components/homepage/faq/faq";

export default function Home() {
  return (
    <>
      <Preview />
      <HomepageIntro />
      <FeedbackCarousel />
      <Info />
      <BlogInfo />
      <Faq />
    </>
  );
}
