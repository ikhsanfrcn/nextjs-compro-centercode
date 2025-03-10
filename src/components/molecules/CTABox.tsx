import Link from "next/link";
import { Title } from "../atoms/Title";

export const CTABox: React.FC = () => {
  return (
    <div className="bg-white md:shadow-2xl">
      <div className="flex flex-col p-5 lg:p-10">
        <Title>How We Work?</Title>
        <p className="md:w-1/2 md:text-sm lg:text-lg">{`Let's discuss what projects you have in mind`}</p>
      </div>
        <Link href={'/contact'} className="bg-[#4A4A4A] p-5 text-white md:text-sm lg:text-lg">{`Let's Have a Coffee`}</Link>
    </div>
  );
};
