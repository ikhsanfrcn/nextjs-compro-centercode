import { ClientSection } from "@/components/organisms/ClientSection";
import { CTASection } from "@/components/organisms/CTASection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { InformationSection } from "@/components/organisms/InformationSection";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { TeamSection } from "@/components/organisms/TeamSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://centercode.vercel.app";

export async function generateMetadata() {
  const currentUrl = `${siteUrl}`;

  return {
    title: "CenterCode | Expert in Web & Mobile App Development, UI/UX Designer",
    description: "CenterCode is a leading software development company specializing in web and mobile app development, UI/UX design, and innovative digital solutions. We craft seamless user experiences with cutting-edge technology. Let's build something great together!",
    openGraph: {
      title: "CenterCode | Expert in Web & Mobile App Development, UI/UX Design",
      description: "CenterCode is a leading software development company specializing in web and mobile app development, UI/UX design, and innovative digital solutions. We craft seamless user experiences with cutting-edge technology. Let's build something great together!",
      url: currentUrl,
      images: [
        {
          url: "/about.webp",
          width: 1200,
          height: 630,
          alt: "Compro Thumbnail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "CenterCode | Expert in Web & Mobile App Development, UI/UX Design",
      description: "CenterCode is a leading software development company specializing in web and mobile app development, UI/UX design, and innovative digital solutions. We craft seamless user experiences with cutting-edge technology. Let's build something great together!",
      images: [
        {
          url: "/about.webp",
          width: 1200,
          height: 630,
          alt: "Compro Thumbnail",
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-15 gap-20">
      <HeroSection />
      <ServicesSection />
      <CTASection />
      <ClientSection />
      <TeamSection />
      <InformationSection />
    </div>
  );
}
