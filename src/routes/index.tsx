import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import {
  About,
  AmcBanner,
  Contact,
  Footer,
  Hero,
  Products,
  SafetyEquipment,
  Services,
  WhyUs,
} from "@/components/site/Sections";

const title = "FX Safety Solutions | Fire Safety Equipment in Telangana";
const description =
  "FX Safety Solutions supplies, installs and maintains fire extinguishers, alarm, hydrant and sprinkler systems, exit lights and safety equipment across Medchal Malkangiri, Telangana.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <SafetyEquipment />
        <WhyUs />
        <AmcBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
