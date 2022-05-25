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
            <Radio name={"choose__content"} id={"choose__content-1"} value={1}>
              <div>
                <p>
                  <b>Neterminuota sutartis</b>
                </p>
                <p>kaina menesiui</p>
              </div>
              <div>
                <span>
                  <b>15,00 €</b>
                </span>
                <span></span>
              </div>
            </Radio>
          </li>
          <li>
            <Radio name={"choose__content"} id={"choose__content-2"} value={2}>
              <div>
                <p>
                  <b>Metine sutartis</b>
                </p>
                <p>kaina menesiui</p>
              </div>
              <div>
                <span>
                  <b>15,00 €</b>
                </span>
                <span></span>
              </div>
            </Radio>
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
