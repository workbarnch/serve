import style from "../prices/prices.module.scss";
import tooth from "../images/icons/tooth.svg";
import grozi from "../images/icons/grozi.svg";
import klinikos from "../images/icons/klinikos.svg";
import spa from "../images/icons/spa.svg";
import reab from "../images/icons/reab.svg";
import sporto from "../images/icons/sporto.svg";
import veterinar from "../images/icons/veterinar.svg";
import autoservisa from "../images/icons/autoservisa.svg";
import hands from "../images/icons/hands.svg";
import Radio from "../custom/radio/Radio";

export default function Prices() {
  return (
    <div className={style.container}>
      <div className={style.selectSystem}>
        <h2>Pasirinkite sistema</h2>
        <ul>
          <li>
            <Radio
              name={"content__navigation"}
              id={"content__navigation-1"}
              value={1}
              unicClass={style.content__navigation__buttons}
            >
              <span>
                <b>Kompiuterinė sistema „Serve Professionals”</b>
                <p>
                  Į Jūsų kompiuterinę įrangą įdiegiama sistema ir duomenų bazė.
                </p>
              </span>
            </Radio>
          </li>
          <li>
            <Radio
              name={"content__navigation"}
              id={"content__navigation-2"}
              value={2}
              unicClass={style.content__navigation__buttons}
            >
              <span>
                <b>Naršyklinė sistema „ServePro”</b>
                <p>
                  Prie savo sistemos ir duomenų bazės esančios mūsų serveryje
                  jungiatės per naršyklę.
                </p>
              </span>
            </Radio>
          </li>
        </ul>
      </div>
      <div className={style.services}>
        <ul>
          <li>
            <div className={style.servicBlock}>
              <span><img src={tooth.src} alt="tooth" /></span>
              <p>Odontologijos klinikos</p>
            </div>
          </li>
          <li>
            <div className={style.servicBlock}>
              <span><img src={klinikos.src} alt="klinikos"/></span>
              <p>Grožio centrai ir kirpyklos </p>
            </div>
          </li>
          <li>
            <div className={style.servicBlock}>
              <span><img src={grozi.src} alt="grozi" /></span>
              <p>Odontologijos klinikos</p>
            </div>
          </li>
          <li>
            <div className={style.servicBlock}>
              <span> <img src={spa.src} alt="spa" /></span>
              <p>SPA ir masažo centrai</p>
            </div>
          </li>
          <li>
            <div className={style.servicBlock}>
              <span><img src={reab.src} alt="reab"/></span>
              <p>Reabilitacijos centrai</p>
            </div>
          </li>
          <li>
            <div className={style.servicBlock}>
              <span> <img src={sporto.src} alt="sporto"/></span>
              <p>Sporto centrai</p>
            </div>
          </li>
          <li>
            <div className={style.servicBlock}>
              <span><img src={veterinar.src} alt="veterinar"/></span>
              <p>Veterinarijos klinikos </p>
            </div>
          </li>
          <li>
            <div className={style.servicBlock}>
              <span><img src={autoservisa.src} alt="autoservisa"/></span>
              <p>Autoservisu paslaugas</p>
            </div>
          </li>
          <li>
            <div className={style.servicBlock}>
              <span><img src={hands.src} alt="hands"/></span>
              <p>Patalpu valymo paslaugos</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
