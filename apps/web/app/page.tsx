import Netflix from "@/components/ui/bgimg";
import Pricing from "@/components/ui/pricing";
import Showcase from "@/components/ui/Logoshowcase";
import FAQSection from "@/components/ui/faq";
import ImageCollage from "@/components/ui/collage";
import { Appbar } from "@/components/ui/Appbar";
import { Footer } from "@/components/Footer";
import ProductComparison from "@/components/ui/comparison";

export default function Home() {
  return (
    <div>
      <Appbar />
      <Netflix />
      <Showcase />
      <ImageCollage />
      <ProductComparison />
      <Pricing />
      <FAQSection />
      <Footer />
    </div>
  );
}
