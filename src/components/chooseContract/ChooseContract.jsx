import style from "../chooseContract/chooseContract.module.scss";
import lock from "../../images/icons/krepselis.svg";
import file from "../../images/icons/saskaitas.svg";
import Radio from "../custom/radio/Radio";

export default function ChooseContract() {
  return (
    <div className={style.container}>
      <div className={style.buyContent}>
        <ul>
          <li>
            <Radio
              name={"choose__contract"}
              id={"choose__contract-1"}
              value={1}
            >
              <div className={style.textWrap}>
                <p>
                  <b>Neterminuota sutartis</b>
                </p>
                <span>kaina menesiui</span>
              </div>
            </Radio>
            <div className={style.priceWrap}>
                <span>
                  <b>15,00 €</b>
                </span>
              </div>
          </li>
          <li>
            <Radio 
               name={"choose__contract"}
               id={"choose__contract-2"}
               value={2}
            >
              <div className={style.textWrap}>
                <p>
                  <b>Metine sutartis</b>
                </p>
                <span>kaina menesiui</span>
              </div>
            </Radio>
            <div className={style.priceWrap}>
                <span>
                  <b>15,00 €</b>
                </span>
              </div>
          </li>
        </ul>
        <div className={style.buttonWrapp}>
          <a>
            <img src={lock.src} alt="lock" />
            <span>Pirkti</span>
          </a>
          <a>
            <img src={file.src} alt="" />
            <span>PDF pasiūlymas</span>
          </a>
        </div>
      </div>
    </div>
  );
}
