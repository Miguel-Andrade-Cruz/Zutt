import { ReactElement } from "react";

type ItemProps = {

  id: string
  value: string;
  default?: boolean;
  children: string;
};

type DropdownContainerProps = {

  items: ReactElement<ItemProps>[];
  label: string;
};


export type {DropdownContainerProps, ItemProps};