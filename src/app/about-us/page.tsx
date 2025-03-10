import { Subtitle } from "@/components/atoms/Subtitle";
import { Text } from "@/components/atoms/Text";
import { Title } from "@/components/atoms/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col container mx-auto min-h-screen pt-15 gap-20">
      <section className="flex max-sm:flex-col items-center max-sm:gap-5 justify-between mx-5">
        <Title className="">About Company</Title>
        <Image
          src={"/about-vector.webp"}
          width={0}
          height={0}
          sizes="100%"
          alt="Vector"
          className="w-[200px] h-[200px] object-cover rounded-lg"
        />
      </section>
      <section className="flex max-sm:flex-col max-sm:items-center justify-between gap-10 lg:gap-20 mx-5">
        <Image
          src={"/about.webp"}
          width={0}
          height={0}
          sizes="100%"
          alt="About Company"
          className="w-[300px] h-auto lg:w-[400px] lg:h-[400px] object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between gap-5 lg:gap-0">
          <div className="flex">
            <Subtitle className="bg-[#333333] px-5 py-2 rounded-full text-white">
              About the Company
            </Subtitle>
          </div>
          <Text className="pl-5">
            Innovative Solutions is a cutting-edge technology company that
            provides innovative solutions for businesses of all sizes. Founded
            in 2010, we are dedicated to helping our clients achieve their goals
            through our customized and effective technology solutions. With over
            a decade of experience, we have built a reputation for delivering
            high-quality services to our clients.
          </Text>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-2">
              <Subtitle>2022</Subtitle>
              <Text>Founded</Text>
            </div>
            <div className="flex flex-col gap-2">
              <Subtitle>96</Subtitle>
              <Text>Clients</Text>
            </div>
            <div className="flex flex-col gap-2">
              <Subtitle>140</Subtitle>
              <Text>Projects done</Text>
            </div>
            <div className="flex flex-col gap-2">
              <Subtitle>61</Subtitle>
              <Text>5-Stars Review</Text>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
