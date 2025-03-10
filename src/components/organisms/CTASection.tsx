import Image from "next/image";
import { CTABox } from "../molecules/CTABox";

export const CTASection: React.FC = () => {
  return (
    <section className="md:flex md:relative justify-end items-center">
      <div className="md:relative md:w-[70%]">
        <Image
          src="/serviceimage.webp"
          width={0}
          height={0}
          alt=""
          sizes="100%"
          className="w-full h-auto"
        />
        <div className="md:absolute -left-[30%] md:top-[15%] lg:top-[25%] md:shadow-2xl">
          <CTABox />
        </div>
      </div>
    </section>
  );
};
