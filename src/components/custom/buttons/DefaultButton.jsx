import style from './buttons.module.scss';

export default function DefaultButton({children, text, onClick, unicClass=''}) {
    return (
        <button onClick={onClick} className={`${style.default__button} ${unicClass}`}>
            {children?children:null}
            <span>{text}</span>
        </button>
    )
}
