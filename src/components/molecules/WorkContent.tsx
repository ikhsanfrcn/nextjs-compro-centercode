import { Icon } from "../atoms/Icon";
import { IoLogoAndroid } from "react-icons/io";
import { MdWeb } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";
import { Subtitle } from "../atoms/Subtitle";

export const WorkContent: React.FC = () => {
  return (
      <div className="">
        <Title>What We Do?</Title>
        <div className="flex flex-col gap-5 pt-10">
          <div>
            <div className="flex gap-5 items-center">
              <Icon Component={IoLogoAndroid} />
              <Subtitle>Mobile Application</Subtitle>
            </div>
            <Text>
              Building mobile applications is never easy. P2P lending app ?
              Logistic App ? E-Commerce App ? We have done them all. Done them
              all well. Done them all fast.
            </Text>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <Icon Component={MdWeb} />
              <Subtitle>Web Application</Subtitle>
            </div>
            <Text>
              We can build any web applications you need. A personal blog ?
              Company Profile ? E-commerce ? or any specific functionalities ?
              We got you covered! We have a strong team of web developers that
              can follow your stack and needs.
            </Text>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <Icon Component={SiAffinitydesigner} />
              <Subtitle>UI/UX Design</Subtitle>
            </div>
            <Text>
              All things are designed. A few things are designed well. We try to
              elevate your ideas with great UI/UX design, suited to your taste,
              addressing the right pain points.
            </Text>
          </div>
        </div>
      </div>
  );
};
