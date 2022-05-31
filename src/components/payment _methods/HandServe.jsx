import Imone from "../../svg/Imone";
import DefaultButton from "../custom/buttons/DefaultButton";
import style from "../payment _methods/handServe.module.scss";

export default function HandServe() {
  return (
    <div className={style.container}>
      <div className={style.titleWrap}>
        <h2>Mano planas</h2>
      </div>
      <div className={style.content}>
        <div className={style.leftCol}>
          <h3>Moduliai</h3>
          <ul>
            <li>Užsakymų registravimo kalendorius</li>
            <li>Ryšių su klientais valdymas</li>
            <li>Personalo administravimas</li>
            <li>Finansinės operacijos ir ataskaitos</li>
            <li>Prekių sandėlio valdymas</li>
            <li>Personalo administravimas</li>
            <li>Gydymo plano sudarymas</li>
            <li>Filialu valdymas</li>
            <li>Sąsaja su buhalterine programa „Rivilė“</li>
            <li>TLK kompensacijų administravimas</li>
            <li>Gydytojo įrašo pasirašymas el. parašu</li>
            <li>Sąsaja su „E sveikata“</li>
          </ul>
        </div>
        <div className={style.rightCol}>
          <div className={style.employeeWrap}>
            <ul>
              <li>
                <div>Darbuotojų skaičius</div>
                <div className={style.ml}>7</div>
              </li>
              <li>
                <div>
                  <h2>Metinė sutartis</h2>
                  <p>Kaina mėnesiui su PVM</p>
                </div>
                <div className={style.ml}>
                  <h2>120,00 €</h2>
                  <span>146,00 €</span>
                </div>
              </li>
              <li>
                <div>
                  <p>Licencijos galiojimo terminas iki </p>
                </div>
                <div className={style.ml}>
                  <p>2023-06-30</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={style.buttonWrap}>
            <div>
              <DefaultButton text={"Keisti planą"}>
                <Imone />
              </DefaultButton>
            </div>
            <div>
              <DefaultButton text={"Keisti mokėjimo duomenis"}>
                <Imone />
              </DefaultButton>
            </div>
            <div>
              <DefaultButton text={"Atšaukti planą"}>
                <Imone />
              </DefaultButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
