import style from './smartinput.module.scss';
import {useState} from "react";
import showIcon from '../../../images/icons/akis.svg';
import hideIcon from '../../../images/icons/akis_perbraukta.svg';

export default function SmartInput({type, placeholder = '', onChange = () =>{}, name = '', defaultValue = '', unicClass = ''}){
    const [show, setShow] = useState(false)
     
    const eventShowHide = () => {
        setShow(!show)
    }
    return (
        <div className={`${style.container} ${unicClass}`}>
            <input
                type={show?'text':type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                defaultValue={defaultValue}
            />
            {
                type === 'password'?
                    <div className={style.buttons}>
                        {
                            show?
                                <img src={showIcon.src} alt="show" className={style.show} onClick={eventShowHide}/>
                                :
                                <img src={hideIcon.src} alt="hide" className={style.hide} onClick={eventShowHide}/>
                        }
                    </div>: null
            }
        </div>
    )
}
