import { FaCentercode } from "react-icons/fa";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";

export const HeroContent: React.FC = () => {
  return (
    <div className="md:pl-12 md:max-w-md">
      <div className="flex flex-col gap-5 md:gap-10">
        <div>
          <h2 className="max-sm:text-4xl text-6xl font-bold">
            We Code <br /> We Deliver
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <Icon Component={FaCentercode} className="text-5xl" />
          <Text className="text-xl text-[#414141]">
            CenterCode specializes in developing high-performing mobile and web
            applications.
          </Text>
        </div>
      </div>
    </div>
  );
};
