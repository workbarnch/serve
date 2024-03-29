import {useState}  from 'react'
import style from './countinput.module.scss';

export default function ({onChange, unicClass= '', defaultValue = 0 }){
    const [value, setValue] = useState(defaultValue)
    const incriment = () => {
        setValue((v) => v+=1)
        console.log(value)
    }
    const decriment = () => {
        value > 0 ?   setValue((v) => v-=1) : setValue(0)
    }
    const  handleChange = (e) => {
      setValue(+e.target.value)
    }
    return(
        <div className={`${style.container} ${unicClass}`}>
            <button onClick={decriment} ></button>
            <input type="number" value={value} onChange={onChange ? onChange : handleChange}/>
            <button onClick={incriment}></button>
        </div>
    )
}
