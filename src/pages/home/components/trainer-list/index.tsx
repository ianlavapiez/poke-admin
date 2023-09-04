import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import Table from "antd/es/table";
import type { ColumnsType } from "antd/es/table";
import { RankTag } from "common";
import { useContext } from "contexts/Context";
import { OpenMessageType } from "hooks/useMessage";
import { TrainerListContainer } from "./TrainerList.styles";

type Props = {
  openMessage: ({ type, text }: OpenMessageType) => void;
  trainers: Trainer[];
};

const TrainerList: React.FC<Props> = ({ openMessage, trainers }) => {
  const navigate = useNavigate();

  const { isSimulationStarted } = useContext();

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
            onClick: isSimulationStarted
              ? () =>
                  openMessage({
                    type: "info",
                    text: `Cannot redirect you to the trainer's page as of this moment.`,
                  })
              : () => navigate(`/trainer/${id}`),
          };
        }}
        rowKey="id"
      />
    </TrainerListContainer>
  );
};

export default memo(TrainerList);
