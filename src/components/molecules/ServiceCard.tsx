import Image from "next/image";

type ServiceCardProps = {
  image: string;
  title: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ image, title }) => (
  <div className="relative hover:scale-110 transition-all">
    <Image
      src={image}
      width={0}
      height={0}
      sizes="100%"
      alt={title}
      className="h-[300px] w-[250px] lg:h-[500px] lg:w-[350px] object-cover rounded-2xl"
    />
    <p className="absolute bottom-20 left-0 lg:text-2xl bg-[#333333] text-white font-bold px-5 py-2 border-t border-b border-white shadow-2xl">
      {title}
    </p>
  </div>
);
