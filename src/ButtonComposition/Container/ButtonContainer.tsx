import CSS from 'csstype';

import ButtonContainerType from './ButtonContainerProps';

function ButtonContainer(props : ButtonContainerType) {

  const styles: CSS.Properties = props.stylesheet || {}

  return (
    <>
      < button style={styles} onClick={props.onClick}>
        {props.children}
      </button>
    </>

  );  


}


export default ButtonContainer;