import style from "../../custom/customInput/customInput.module.scss"

export default function  CustomInput  ({ name, placeholder, label, register, type})  {
    return (
      <div className={style.inputWrap}>
        <label htmlFor={name}>{label}</label>
        <input name={name} placeholder={placeholder} ref={register} type={type}/>
      </div>
    );
  };