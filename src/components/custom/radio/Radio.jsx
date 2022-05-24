import style from './radio.module.scss';


export default function Radio(props) {

    return (
        <div className={`${style.radio} ${props.unicClass ? props.unicClass : ''}`}>
            <input
                type="radio"
                name={props.name ? props.name : ''}
                id={props.id ? props.id : ''}
                value={props.value ? props.value : ''}
                onChange={props.onChange}
            />
            <div className={style.buttons}>
                <span style={props.color ? {borderColor: props.color} : {}}></span>
                <span style={props.color ? {borderColor: props.color} : {}}></span>
            </div>
            {
                props.children ?
                    <label htmlFor={props.id ? props.id : ''}>{props.children}</label> :
                    null
            }

        </div>
    )
}
