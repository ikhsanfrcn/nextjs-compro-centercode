import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";
import { Icon } from "../atoms/Icon";
import { Subtitle } from "../atoms/Subtitle";
import { Text } from "../atoms/Text";
import LeafletMap from "../molecules/LeafletMap";

export const InformationSection: React.FC = () => {
  const mapCenter = { lat:-6.922220, lng: 107.616054 };
  const zoomLevel = 17;

  return (
    <section className="container mx-auto">
      <div className="flex max-sm:flex-col justify-between lg:max-w-[70%] mx-auto max-sm:gap-5 p-5">
        <div className="md:w-[40%]">
          <Subtitle className="pb-2">Location</Subtitle>
          <LeafletMap center={mapCenter} zoom={zoomLevel} />
        </div>
        <div>
          <Subtitle>Company</Subtitle>
          <ul className="flex flex-col gap-2 pt-2 text-[#9F9F9F]">
            <li>- Work</li>
            <li>- Service</li>
            <li>- Team</li>
            <li>- Contact</li>
          </ul>
        </div>
        <div>
          <Subtitle>Contact Us</Subtitle>
          <div className="flex flex-col gap-5 pt-2">

          <div className="flex gap-2 items-center">
            <Icon Component={FaFacebook} className="text-2xl" />
            <Text className="text-[#9F9F9F]">CenterCode</Text>
          </div>
          <div className="flex gap-2 items-center">
            <Icon Component={FaInstagram} className="text-2xl" />
            <Text className="text-[#9F9F9F]">CenterCode</Text>
          </div>
          <div className="flex gap-2 items-center">
            <Icon Component={FaMailBulk} className="text-2xl" />
            <Text className="text-[#9F9F9F]">service@centercode.com</Text>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
