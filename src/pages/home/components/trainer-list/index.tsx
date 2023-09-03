import React, { memo } from "react";
import Table from "antd/es/table";
import type { ColumnsType } from "antd/es/table";
import { TrainerListContainer } from "./TrainerList.styles";

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
    },
  ];

  const sampleTrainerData: TrainerTable[] = [
    {
      id: 1,
      name: "Ash Ketchum",
      rank: 1,
    },
    {
      id: 2,
      name: "Brock",
      rank: 2,
    },
    {
      id: 3,
      name: "Misty",
      rank: 3,
    },
  ];

  return (
    <TrainerListContainer>
      <Table columns={columns} dataSource={sampleTrainerData} />
    </TrainerListContainer>
  );
};

export default memo(TrainerList);
