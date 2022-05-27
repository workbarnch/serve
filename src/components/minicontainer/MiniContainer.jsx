import style from './minicontainer.module.scss';
import addressIcon from '../../images/icons/imoniu_grupe.svg';
export default function MiniContainer({children, title, showAddress=false, address = '', mail=''}){

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h3>{title}</h3>
            </div>
            <div className={style.content}>
                {
                    showAddress?
                        <div className={style.address__container}>
                            <div className={style.address__icon}>
                                <img src={addressIcon.src} alt="address"/>
                            </div>
                            <div className={style.address__content}>
                                <p className={style.address}>{address}</p>
                                <p className={style.mail}>{mail}</p>
                            </div>
                        </div>:null
                }
                {children}
            </div>

        </div>
    )
}
