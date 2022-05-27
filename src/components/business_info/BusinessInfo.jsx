import style from "../business_info/business.module.scss";
import rightArrow from "../../images/icons/right-arrow.svg";
import CustomInput from "../custom/customInput/CustomInput";
import DubleInput from "../custom/dubleInput/DubleInput";

export default function BusinessInfo() {
  return (
    <div className={style.businessInfoWrap}>
      <div className={style.container}>
        <div className={style.title}>
          <h3>Jūsų įmonės duomenys</h3>
        </div>
        <div className={style.inputWrap}>
          <div className={style.leftSide}>
            <CustomInput  placeholder="valod"/>
            <CustomInput />
            <CustomInput />
            <CustomInput />
            <CustomInput />
            <CustomInput />
          </div>
          <div className={style.rightSide}>
            <CustomInput />
            <CustomInput />
            <CustomInput />
            <DubleInput />
            <CustomInput />
            <CustomInput />
          </div>
        </div>
      </div>
      <div className={style.buttonWrapp}>
        <a href="#">
          <span>Toliau</span>
          <img src={rightArrow.src} alt="" />
        </a>
      </div>
    </div>
  );
}
