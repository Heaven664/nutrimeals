import Preview from "@/components/homepage/preview/Preview";
import HomepageIntro from "@/components/homepage/intro/HomepageIntro";
import FeedbackCarousel from "@/components/homepage/feedback/Feedback";
import Info from "@/components/homepage/info";
import BlogInfo from "@/components/homepage/blog/BlogInfo";

export default function Home() {
  return (
    <>
      <Preview />
      <HomepageIntro />
      <FeedbackCarousel />
      <Info />
      <BlogInfo />
    </>
  );
}
