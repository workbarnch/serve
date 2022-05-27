import style from './buttons.module.scss';
import icon from '../../../images/icons/right-arrow.svg';

export default function NextButton({children, type = 'button', onClick}) {
    return (
        <div className={style.next__button}>
            <button type={type} onClick={onClick} >
                {children}
                <img className={style.next__button_icon} src={icon.src} alt="icon"/>
            </button>
        </div>
    )
}
