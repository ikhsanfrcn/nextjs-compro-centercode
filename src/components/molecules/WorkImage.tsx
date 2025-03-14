import Image from "next/image";

export const WorkImage: React.FC = () => {
  return (
    <Image
      src="/workimage.webp"
      width={0}
      height={0}
      sizes="100%"
      alt=""
      className="w-full md:w-[40%] lg:w-full h-auto"
    />
  );
};
