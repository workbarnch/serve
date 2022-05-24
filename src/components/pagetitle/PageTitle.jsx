import style from './pagetitle.module.scss';

export default function PageTitle(props) {
    return (
        <div className={style.container}>
            <h2>{props.title}</h2>
            {
                props.subTitle ?
                    <p>{props.subTitle}</p>
                : null
            }
        </div>
    )
}
