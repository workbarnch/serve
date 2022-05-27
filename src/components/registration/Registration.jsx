import style from "../registration/registration.module.scss";
import imone from "../../images/icons/imone.svg"
import usericon from "../../images/icons/zmogus.svg"

export default function Registration() {
  return (
    <div className={style.registrWrap}>
      <div className={style.container}>
        <div className={style.titleWrap}>
          <h3> Registruotis</h3>
        </div>
        <div className={style.buttonWrap}>
            <a href="#"><img src={imone.src}alt="" /><span>Registruotis įmonės vardu</span> </a>
            <a href="#"><img src={usericon.src} alt="" /><span>Registruotis fiziniam asmeniui</span></a>
        </div>
      </div>
    </div>
  );
}
