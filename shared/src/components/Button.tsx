import { FC } from 'react'
import "./Button.css"
interface buttonProps {
    caption: any;
}
const ButtonComponent: FC<buttonProps> = ({ caption = "Shared Button" }) => {
    return (
        <>
            <button className='shared-btn'>{caption}</button>
        </>
    )
};

export default ButtonComponent