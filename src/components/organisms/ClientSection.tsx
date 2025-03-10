import Image from "next/image";
import { Title } from "../atoms/Title";

const clients: string[] = [
  "/mandiri.webp",
  "/amartha.webp",
  "/paxel.webp",
  "/wahyoo.webp",
  "/sisco.webp",
  "/hubble.webp",
  "/legoas.webp",
  "/cbn.webp",
  "/ciputra.webp",
  "/income.webp",
  "/lazada.webp",
  "/unair.webp",
  "/jawapos.webp",
];
export const ClientSection: React.FC = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center">
        <Title className="text-center">
          Our Customers <br />
          are our biggest fans
        </Title>
      </div>
      <div className="flex flex-wrap justify-center space-between items-center gap-4 pt-5">
        {clients.map((visual, index) => (
          <Image
            key={index}
            src={visual}
            width={0}
            height={0}
            sizes="100vw"
            alt={`client ${index + 1}`}
            className="w-[calc(15%-5px)] h-auto"
          />
        ))}
      </div>
    </section>
  );
};
