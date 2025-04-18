import { ReactElement } from "react";

type ItemProps = {

  value: string
  default?: boolean
};

type DropdownContainerProps = {

  items: Array<ReactElement<ItemProps>>;
  label: string;
  children: ReactElement<ItemProps>;
};


export default DropdownContainerProps;