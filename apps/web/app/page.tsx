import Netflix from "@/components/ui/bgimg";
import Showcase from "@/components/ui/Logoshowcase";
import FAQSection from "@/app/Faq/page";
import ImageCollage from "@/components/ui/collage";
import { Appbar } from "@/components/ui/Appbar";
import { Footer } from "@/components/Footer";
import ProductComparison from "@/components/ui/comparison";
import PricingPage from "./Pricing/page";
import ImageDescription from "@/components/ui/imagedescription";
import UserGuide from "@/components/ui/guide";

export default function Home() {
  return (
    <div>
      <Appbar />
      <Netflix />
      <Showcase />
      <ImageCollage />
      <UserGuide />
      <ProductComparison />
      <PricingPage />
      <FAQSection />
      <Footer />
    </div>
  );
}
