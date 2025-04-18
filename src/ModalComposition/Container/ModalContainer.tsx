import CSS from 'csstype';

import ModalContainerType from './ModalContainerType';

function ModalContainer (props : ModalContainerType) {
  
  const styles: CSS.Properties = props.stylesheet || {
    backgroundColor: 'white',
    borderRadius: '5px',
    width: '300px',
    height: '200px',
  }
  
  
  return (
    <>
      <div style= {styles}>
        
      </div>
    </>
  )
}


export default ModalContainer;