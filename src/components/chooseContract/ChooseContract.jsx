import style from "../chooseContract/chooseContract.module.scss";
import lock from "../images/icons/krepselis.svg"
import file from "../images/icons/suskleist.svg"

export default function ChooseContract() {
  return (
    <div className={style.container}>
      <div className={style.buyContent}>
        <ul>
          <li>
            <div>
              <input type="radio" />
            </div>
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
          </li>
          <li>
            <div>
              <input type="radio" />
            </div>
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
          </li>
        </ul>
        <div className={style.buttonWrapp}>
            <a><img src={lock.src} alt="lock" /><span>Pirkti</span></a>
            <a><img src={file.src} alt="" /><span>PDF pasiūlymas</span></a>
        </div>
      </div>
    </div>
  );
}
