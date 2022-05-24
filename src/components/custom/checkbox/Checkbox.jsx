import style from './checkbox.module.scss';

export default function Checkbox(props){
    return (
        <div className={`${style.checkbox} ${props.unicClass?props.unicClass:''}`}>
            <input
                type="checkbox"
                name={props.name ? props.name : ''}
                id={props.id ? props.id : ''}
                value={props.value ? props.value : ''}
                onChange={props.onChange}
            />

            <label htmlFor={props.id}>
                <div className={style.bottons}>
                    <span style={props.color ? {backgroundColor: props.color} : {}}></span>
                    <span style={props.arrowColor ? {borderColor: props.arrowColor} : {}}></span>
                    <span style={props.color ? {borderColor: props.color} : {}}></span>
                </div>
                {props.text? props.text: ''}
            </label>
        </div>

    )
}
