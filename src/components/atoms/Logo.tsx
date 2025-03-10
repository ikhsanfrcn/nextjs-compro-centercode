
import React from "react";
import { Icon } from "./Icon";
import { FaCentercode } from "react-icons/fa";
import { Text } from "./Text";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href={'/'} className="flex shrink-0 items-center gap-2">
      <Icon Component={FaCentercode} className="text-3xl lg:text-5xl" />
      <Text className="font-bold text-2xl">CenterCode</Text>
    </Link>
  );
};

export default Logo;
