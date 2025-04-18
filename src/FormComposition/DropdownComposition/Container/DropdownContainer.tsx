import { ReactElement, useContext, useState } from 'react';

import { FormContext } from '../../../FormComposition/Context/FormContext';

import DropdownContainerProps from './DropdownContainerProps';
import ButtonContainer from '../../../ButtonComposition/Container/ButtonContainer';




function DropdownContainer(props : DropdownContainerProps) {
  const {formData, udpateForm} = useContext(FormContext);
  const [selected, setSelected] = useState<string | null>(null);

  const default_option: ReactElement = props.items.find((item) => { return item.default === true;})

  return (
    <>
      <p>{props.label}</p>
      <ButtonContainer>
      </ButtonContainer>

    </>
  );
};



export default DropdownContainer;

<DropdownContainer label="Select a row"
  items={[
    <Item default id='1' value='ONE'>Row one</Item>
  ]}
>

</DropdownContainer>