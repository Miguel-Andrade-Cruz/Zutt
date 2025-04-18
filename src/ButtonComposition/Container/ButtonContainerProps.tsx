import CSS from 'csstype';

type ButtonContainerType = {
  stylesheet? : CSS.Properties;
  onClick : () => void;
  children: React.ReactNode | string;
};


export default ButtonContainerType;