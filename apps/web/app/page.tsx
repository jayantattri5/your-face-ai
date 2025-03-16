import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button"
import Hero  from "@/components/Hero";
import Netflix from "@/components/ui/bgimg";
import Pricing from "@/components/ui/pricing";
import Showcase from "@/components/ui/Logoshowcase";
import FAQSection from "@/components/ui/faq";
import ImageCollage from "@/components/ui/collage";
import ParallelogramImageBackground from "@/components/ui/Parallelogram";
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
