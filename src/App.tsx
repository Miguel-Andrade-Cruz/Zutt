import './App.css'

import DropdownContainer from './FormComposition/DropdownComposition/Container/DropdownContainer';
import ItemContainer from './FormComposition/DropdownComposition/ItemComposition/Container/ItemContainer';

function App() {
  

  return (
    <>

        <DropdownContainer
          label='Wich row do you want to choose?'
          items={[
            <ItemContainer id='choosed_row' value='ONE'>Row One</ItemContainer>,
            <ItemContainer default id='choosed_row' value='TWO'>Row Two</ItemContainer>,
            <ItemContainer id='choosed_row' value='THREE'>Row Three</ItemContainer>,
          ]}
        />
    </>
  );
}

export default App
