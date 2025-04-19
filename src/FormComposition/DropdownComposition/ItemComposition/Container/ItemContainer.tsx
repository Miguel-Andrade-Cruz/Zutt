import ItemContainerProps from "./ItemContainerProps";

function ItemContainer(props: ItemContainerProps) {
  
  return (
    <p>
      {props.children}
    </p>
  );
}


export default ItemContainer;