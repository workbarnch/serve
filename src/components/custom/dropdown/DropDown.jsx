import  {useState} from 'react';
import style from './dropdown.module.scss';

export default function DropDown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const arrowClass = isOpen ?
        `${style.dropdown__title__arrow} ${style.dropdown__title__arrow_open}` :
        `${style.dropdown__title__arrow} ${style.dropdown__title__arrow_close}`;
    const contentClass = isOpen ?
        `${style.dropdown__content} ${style.dropdown__content_open}` :
        `${style.dropdown__content} ${style.dropdown__content_close}`;

    const titleClass = isOpen ?
        `${style.dropdown__title} ${style.dropdown__title_open}` :
        `${style.dropdown__title} ${style.dropdown__title_close}`;

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={style.dropdown}>
            <div className={titleClass} onClick={handleClick}>
                <span>{props.title ? props.title : 'DropDown'}</span>
                <div className={arrowClass}></div>
            </div>
            {
                isOpen ?
                    <div className={contentClass}>
                        {props.children ? props.children : 'asdasdasdsa'}
                    </div>: null

            }

        </div>
    )
}
