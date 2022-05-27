import style from "../../custom/dubleInput/dubleInput.module.scss";

export default function DubleInput({ name, label,placeholder, register }) {
  return (
    <div className={style.inputs}>
      <div className={style.left}>
        <label htmlFor={name}>{label}</label>
        <input name={name} placeholder={placeholder} ref={register} />
      </div>
      <div className={style.right}>
        <label htmlFor={name}>{label}</label>
        <input name={name} placeholder={placeholder} ref={register} />
      </div>
    </div>
  );
}
