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

export default function Prices() {
  return (
    <div className={style.container}>
      <div className={style.selectSystem}>
        <h2>Pasirinkite sistema</h2>
        <ul>
          <li>
            <input type="radio" name="selected" />
            <span>
              <b>Lorem ipsum dolor sit</b>
              <p>
                in provident ea accusantium repudiandae possimus quam
                consectetur consequatur perferendis
              </p>
            </span>
          </li>
          <li>
            <input type="radio" name="selected" />
            <span>
              <b>Lorem ipsum dolor sit</b>
              <p>
                in provident ea accusantium repudiandae possimus quam
                consectetur consequatur perferendis
              </p>
            </span>
          </li>
        </ul>
      </div>
      <div>
      </div>
      <div className={style.services}>
        <ul>
          <li>
            <div>
              <img src={tooth.src} alt="" />
            </div>
            <span>Odontologijos klinikos</span>
          </li>
          <li>
            <div>
              <img src={grozi.src} alt="" />
            </div>
            <span>Klinikos ir estetinės medicinos įstaigos </span>
          </li>
          <li>
            <div>
              <img src={klinikos.src} alt="" />
            </div>
            <span>Grožio centrai ir kirpyklos </span>
          </li>
          <li>
            <div>
              <img src={spa.src} alt="" />
            </div>
            <span>SPA ir masažo centrai</span>
          </li>
          <li>
            <div>
              <img src={reab.src} alt="" />
            </div>
            <span>Reabilitacijos centrai</span>
          </li>
          <li>
            <div>
              <img src={sporto.src} alt="" />
            </div>
            <span>Sporto centrai</span>
          </li>
          <li>
            <div>
              <img src={veterinar.src} alt="" />
            </div>
            <span>Veterinarijos klinikos </span>
          </li>
          <li>
            <div>
              <img src={autoservisa.src} alt="" />
            </div>
            <span>Autoservisu paslaugas</span>
          </li>
          <li>
            <div>
              <img src={hands.src} alt="" />
            </div>
            <span>Patalpu valymo paslaugos</span>
          </li>
        </ul>
      </div>
      <div classNazme={style.buyModal}>
         <ul>
           <li>
              <div>
                <input type="radio" />
              </div>
             <div>
               <p>Neterminuota sutartis</p>
               <p>Metine sutartis</p>
               </div>
               <span>15,00 €</span>
           </li>
         </ul>
      </div>
    </div>
  );
}
