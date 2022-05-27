import style from "../InputPlace/inputPlace.module.scss";
import rightArrow from "../../images/icons/right-arrow.svg";
import BusinessInfo from "../businessInfo/BusinessInfo";


export default function InputPlace() {
  return (
    <div className={style.businessInfoWrap}>
      <div className={style.container}>
        <div className={style.title}>
          <h3>Jūsų įmonės duomenys</h3>
        </div>
        <div className={style.content}>
          <BusinessInfo/>
        </div>
        <div className={style.buttonWrapp}>
          <a href="#">
            <span>Toliau</span>
            <img src={rightArrow.src} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
