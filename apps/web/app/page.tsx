import Netflix from "@/components/ui/bgimg";
import FAQSection from "@/app/Faq/page";
import ImageCollage from "@/components/ui/collage";
import { Appbar } from "@/components/ui/Appbar";
import { Footer } from "@/components/Footer";
import ProductComparison from "@/components/ui/comparison";
import PricingPage from "./Pricing/page";
import ImageDescription from "@/components/ui/imagedescription";
import UserGuide from "@/components/ui/guide";
import Explanation from "@/components/explanation";
import Showcase from "@/components/ui/Logoshowcase";
import Detailing from "@/components/Detailing";

export default function Home() {
  return (
    <div>
      <Appbar />
      <Netflix />
      <Showcase />
      <ImageCollage />
      <Explanation />
      <Detailing />
      <UserGuide />
      <ProductComparison />
      <PricingPage />
      <FAQSection />
      <Footer />
    </div>
  );
}
