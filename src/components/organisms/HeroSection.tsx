import { HeroContent } from "../molecules/HeroContent";
import { HeroImage } from "../molecules/HeroImage";

export const HeroSection: React.FC = () => {
  return (
    <section>
      <div className="p-5 md:p-0 md:flex justify-between bg-[#F8F8F8] md:items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};
