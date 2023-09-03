import React from "react";
import AntdTag, { TagProps } from "antd/es/tag";

type Props = TagProps & {
  rank: Rankings;
};

const RankTag: React.FC<Props> = ({ children, rank, ...tagProps }) => {
  const getRankColor = ({ rank }: { rank: Rankings }): TagProps["color"] => {
    let color: TagProps["color"] = "blue";

    if (rank === "Beginner") {
      return "blue";
    } else if (rank === "Great") {
      return "cyan";
    } else if (rank === "Expert") {
      return "green";
    } else if (rank === "Veteran") {
      return "purple";
    } else if (rank === "Ultra") {
      return "gold";
    } else if (rank === "Master") {
      return "magenta";
    }

    return color;
  };

  return (
    <AntdTag color={getRankColor({ rank })} {...tagProps}>
      {children}
    </AntdTag>
  );
};

export default RankTag;
