import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";
import { Icon } from "../atoms/Icon";
import { Subtitle } from "../atoms/Subtitle";
import { Text } from "../atoms/Text";
import LeafletMap from "../molecules/LeafletMap";
import Link from "next/link";

export const InformationSection: React.FC = () => {
  const mapCenter = { lat: -6.92222, lng: 107.616054 };
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
            <Link
              href={"https://www.facebook.com/centercode.id/"}
              className="flex gap-2 items-center"
            >
              <Icon Component={FaFacebook} className="text-2xl hover:text-blue-600" />
              <Text className="text-[#9F9F9F] hover:text-black">CenterCode</Text>
            </Link>
            <Link
              href={"https://www.instagram.com/centercode.id/"}
              className="flex gap-2 items-center"
            >
              <Icon Component={FaInstagram} className="text-2xl hover:text-pink-600" />
              <Text className="text-[#9F9F9F] hover:text-black">CenterCode</Text>
            </Link>
            <Link
              href={"mailto:service@centercode.com"}
              className="flex gap-2 items-center"
            >
              <Icon Component={FaMailBulk} className="text-2xl hover:text-gray-600" />
              <Text className="text-[#9F9F9F] hover:text-black">service@centercode.com</Text>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
