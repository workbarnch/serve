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
                        <Radio name={'content__navigation'} id={'content__navigation-1'} value={1}
                               unicClass={style.content__navigation__buttons}>
              <span>
                  <b>Kompiuterinė sistema „Serve Professionals”</b>
                  <p>Į Jūsų kompiuterinę įrangą įdiegiama sistema ir duomenų bazė.</p>
                </span>
                        </Radio>
                    </li>
                    <li>
                        <Radio name={'content__navigation'} id={'content__navigation-2'} value={2}
                               unicClass={style.content__navigation__buttons}>
                  <span>
                      <b>Naršyklinė sistema „ServePro”</b>
                      <p>Prie savo sistemos ir duomenų bazės esančios mūsų serveryje jungiatės per naršyklę.</p>
                    </span>
                        </Radio>
                    </li>
                </ul>
            </div>
            <div>
            </div>
            <div className={style.services}>
                <ul>
                    <li>
                        <div>
                            <img src={tooth.src} alt=""/>
                        </div>
                        <span>Odontologijos klinikos</span>
                    </li>
                    <li>
                        <div>
                            <img src={grozi.src} alt=""/>
                        </div>
                        <span>Klinikos ir estetinės medicinos įstaigos </span>
                    </li>
                    <li>
                        <div>
                            <img src={klinikos.src} alt=""/>
                        </div>
                        <span>Grožio centrai ir kirpyklos </span>
                    </li>
                    <li>
                        <div>
                            <img src={spa.src} alt=""/>
                        </div>
                        <span>SPA ir masažo centrai</span>
                    </li>
                    <li>
                        <div>
                            <img src={reab.src} alt=""/>
                        </div>
                        <span>Reabilitacijos centrai</span>
                    </li>
                    <li>
                        <div>
                            <img src={sporto.src} alt=""/>
                        </div>
                        <span>Sporto centrai</span>
                    </li>
                    <li>
                        <div>
                            <img src={veterinar.src} alt=""/>
                        </div>
                        <span>Veterinarijos klinikos </span>
                    </li>
                    <li>
                        <div>
                            <img src={autoservisa.src} alt=""/>
                        </div>
                        <span>Autoservisu paslaugas</span>
                    </li>
                    <li>
                        <div>
                            <img src={hands.src} alt=""/>
                        </div>
                        <span>Patalpu valymo paslaugos</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
