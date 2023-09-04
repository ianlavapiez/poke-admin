import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import Table from "antd/es/table";
import type { ColumnsType } from "antd/es/table";
import { TrainerListContainer } from "./TrainerList.styles";
import { RankTag } from "common";
import { useContext } from "contexts/Context";

type Props = {};

const TrainerList: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { trainers } = useContext();

  const columns: ColumnsType<Trainer> = [
    {
      dataIndex: "id",
      key: "id",
      title: "ID",
    },
    {
      dataIndex: "name",
      key: "name",
      title: "Name",
    },
    {
      dataIndex: "rank",
      key: "rank",
      title: "Rank",
      render: (rank: Rankings) => <RankTag rank={rank}>{rank}</RankTag>,
    },
  ];

  return (
    <TrainerListContainer>
      <Table
        columns={columns}
        dataSource={trainers}
        onRow={({ id }) => {
          return {
            style: {
              cursor: "pointer",
            },
            onClick: () => navigate(`/trainer/${id}`),
          };
        }}
        rowKey="id"
      />
    </TrainerListContainer>
  );
};

export default memo(TrainerList);
