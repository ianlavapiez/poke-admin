import React, { memo } from "react";
import Table from "antd/es/table";
import type { ColumnsType } from "antd/es/table";
import { TrainerListContainer } from "./TrainerList.styles";
import { RankTag } from "common";

type Props = {};

const TrainerList: React.FC<Props> = () => {
  const columns: ColumnsType<TrainerTable> = [
    {
      dataIndex: "id",
      key: "id",
      title: "ID",
    },
    {
      dataIndex: "name",
      key: "name",
      title: "Trainer's Name",
    },
    {
      dataIndex: "rank",
      key: "rank",
      title: "Rank",
      render: (rank: Rankings) => <RankTag rank={rank}>{rank}</RankTag>,
    },
  ];

  const sampleTrainerData: TrainerTable[] = [
    {
      id: 1,
      name: "Ash Ketchum",
      rank: "Master",
    },
    {
      id: 2,
      name: "Brock",
      rank: "Veteran",
    },
    {
      id: 3,
      name: "Misty",
      rank: "Beginner",
    },
  ];

  return (
    <TrainerListContainer>
      <Table columns={columns} dataSource={sampleTrainerData} rowKey="id" />
    </TrainerListContainer>
  );
};

export default memo(TrainerList);
