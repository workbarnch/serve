import style from './smartcontent.module.scss';
import {useEffect, useState} from "react";

export default function SmartContent({data = []}){
    const [jsx, setJsx] = useState(data[0].content)
    const [activeItemId, setActiveItemId] = useState(0);
    const [size, setSize] = useState(null);
    const mobile = 768;
    const changeContent = (e) => {
        setJsx(data[e.target.id].content)
        setActiveItemId(e.target.id)
    }
    useEffect(() => {

        window.addEventListener('resize', (e) => {
            if (window.innerWidth <= mobile){
                setSize(mobile)
            }else{
                setSize(1920)
            }
        })
    }, [])
    return (
        <div className={style.container}>
            <nav>
                <ul>
                    {
                        data.map((item, idx) => {
                            return(
                                <li id={idx} key={idx}  onClick={changeContent}>
                                    <span id={idx} className={activeItemId == idx ? style.active:''}>{item.text}</span>
                                    {
                                        idx == activeItemId && size <= mobile && size !== null?
                                            <section className={style.mobile__content}>
                                                {jsx}
                                            </section>:''
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            {
                size > mobile || size === null?
                    <section className={style.content}>
                        {jsx}
                    </section>: null
            }

        </div>
    )
}
