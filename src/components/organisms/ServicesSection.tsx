import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";
import { ServiceCard } from "../molecules/ServiceCard";

export const ServicesSection: React.FC = () => {
  const servicesData = [
    {
      image: "/webdevelopment.webp",
      title: "Web Application",
    },
    {
      image: "/mobileapp.webp",
      title: "Mobile Application",
    },
    {
      image: "/uiux.webp",
      title: "UI/UX Design",
    },
  ];

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <Title>What We Do?</Title>

      <div className="flex max-sm:flex-col gap-5 max-sm:justify-center max-sm:items-center justify-between container mx-auto">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} image={service.image} title={service.title} />
        ))}
      </div>

      <Text className="text-center text-xl w-[50%]">
        Our services are tailored to meet the unique needs of each client,
        ensuring that we deliver effective solutions that help businesses grow.
      </Text>
    </div>
  );
};
