import { ReactElement, useState } from 'react';

// import { FormContext } from '../../../FormComposition/Context/FormContext';

import { DropdownContainerProps, ItemProps } from './DropdownContainerProps';
import ButtonContainer from '../../../ButtonComposition/Container/ButtonContainer';

function DropdownContainer(props : DropdownContainerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [selected, setSelected] = useState<ReactElement<ItemProps> | null>(null);

  const default_option: ReactElement<ItemProps> = props.items.find(
    (item: ReactElement<ItemProps>) => { return item.props.default === true;}
  ) ?? props.items[0];


  return (
    <>
      <p>{props.label}</p>
      <ButtonContainer onClick={() => handleClick()}>
      {
        selected == null
          ? default_option
          : selected
      }
      </ButtonContainer>
      {
        isOpen == true &&
        props.items.map(
          (item: ReactElement<ItemProps>) => (
            <div>
              <ButtonContainer
                onClick={() => {setSelected(item); handleClick();}}
                key={item.props.id}
              >
                {item}
              </ButtonContainer>
            </div>
          )
        )
      }

    </>
  );
};

export default DropdownContainer;
