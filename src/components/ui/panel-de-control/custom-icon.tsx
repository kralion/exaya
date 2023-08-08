import React from "react";
import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import GlitterIcon from "@/assets/icons/glitter.svg";
import { Space } from "antd";
import Image from "next/image";

const PandaSvg = () => (
  <div className="pr-2 pt-1">
    <Image
      className="flex items-center justify-center "
      width={25}
      height={25}
      src={GlitterIcon as any}
      alt="magic"
    />
  </div>
);

const PandaIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PandaSvg} {...props} />
);

const CustomIcon: React.FC = () => (
  <Space>
    <PandaIcon />
  </Space>
);

export default CustomIcon;
