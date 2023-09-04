import message from "antd/es/message";
import { NoticeType } from "antd/es/message/interface";

export type OpenMessageType = {
  type: NoticeType;
  text: string;
};

const useMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const openMessage = ({ type, text }: OpenMessageType): void => {
    messageApi.open({
      type,
      content: text,
    });
  };

  return {
    contextHolder,
    openMessage,
  };
};

export default useMessage;
