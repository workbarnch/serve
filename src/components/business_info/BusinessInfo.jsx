import style from "../business_info/business.module.scss";

export default function BusinessInfo() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Jūsų įmonės duomenys</h2>
      </div>
      <div className={style.inputWrap}>
        <div className={style.leftInputs}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div className={style.righInputs}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
