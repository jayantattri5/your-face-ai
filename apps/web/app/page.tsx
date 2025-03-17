import Netflix from "@/components/ui/bgimg";
import Pricing from "@/components/ui/pricing";
import Showcase from "@/components/ui/Logoshowcase";
import FAQSection from "@/components/ui/faq";
import ImageCollage from "@/components/ui/collage";
import { Appbar } from "@/components/ui/Appbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Appbar />
      <Netflix />
      <Showcase />
      <ImageCollage />
      <Pricing />
      <FAQSection />
      <Footer />
    </div>
  );
}
