import { ReactNode } from 'react';
import './box.styles.scss'

interface BoxProps{
    children?: ReactNode;
    center?: boolean 
}
const Box = ({ children}: BoxProps) => {
    return <div className="box-container">{children}</div>;
};

export default Box