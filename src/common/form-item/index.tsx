import React, { PropsWithChildren } from "react";
import { FormItemProps } from "antd/es/form";
import { StyledFormItem } from "./FormItem.styles";

type Props = FormItemProps & {};

const FormItem: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...formItemProps
}) => {
  return <StyledFormItem {...formItemProps}>{children}</StyledFormItem>;
};

export default FormItem;
