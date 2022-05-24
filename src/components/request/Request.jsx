import style from "../request/request.module.scss";
import telegram from "../images/icons/telegram.svg";
import girlPic1 from  "../images/icons/1.svg";

export default function Request() {
  return (
    <div className={style.container}>
      <div className={style.titleWrapp}>
        <h2>Prašymas</h2>
        <div className={style.address}>
          <p><b>Vardenis Pavardenis</b></p>
          <p>Adr.: Saulės g. 2 -34, Vilnius</p> 
        </div>
        <div className={style.subTitle}><span>Prašome deaktyvuoti mano profilį ir nuasmeninti mano duomenis 2022-05-02.</span></div>
        <a href="#" className={style.iconWrapp}>
          <img src={telegram.src} alt=""/> <span>Siusti</span>
        </a>
      </div>
      <div className={style.rightImage}>
          <img src={girlPic1.src } alt="" />
      </div>
    </div>
  );
}
