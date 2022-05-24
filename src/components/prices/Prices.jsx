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
import Checkbox from "../custom/checkbox/Checkbox";
import DropDown from "../custom/dropdown/DropDown";
import CountInput from "../custom/countinput/CountInput";

export default function Prices() {
    return (
        <div className={style.container}>
            <div className={style.selectSystem}>
                <h2>Pasirinkite sistema</h2>
                <ul>
                    <li>
                        <Radio name={'content__navigation'} id={'content__navigation-1'} value={1} checked
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
            <div className={style.content}>
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
                <div className={style.modules}>
                    <div className={style.module}>
                        <h3>Pasirinkite modulius</h3>
                        <div className={style.modules__items}>
                            <Checkbox id={'one'} checked unicClass={style.modules__checkbox}>
                            </Checkbox>
                            <DropDown title={'Užsakymų registravimo kalendorius'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'two'} checked unicClass={style.modules__checkbox}/>
                            <DropDown title={'Ryšių su klientais valdymas'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'three'} checked unicClass={style.modules__checkbox}/>
                            <DropDown title={'Personalo administravimas'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'fore'} checked unicClass={style.modules__checkbox}/>
                            <DropDown title={'Finansinės operacijos ir ataskaitos'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'five'} checked unicClass={style.modules__checkbox}/>
                            <DropDown title={'Prekių sandėlio valdymas'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'six'} unicClass={style.modules__checkbox} checked/>
                            <DropDown title={'Dokumentų pildymas ir protokolų kūrimas'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'seven'} unicClass={style.modules__checkbox} checked/>
                            <DropDown title={'Gydymo plano sudarymas'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'eight'} unicClass={style.modules__checkbox} checked/>
                            <DropDown title={'Filialu valdymas'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'nine'} unicClass={style.modules__checkbox} checked/>
                            <DropDown title={'Sąsaja su buhalterine programa „Rivilė“'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'then'} unicClass={style.modules__checkbox}/>
                            <DropDown title={'TLK kompensacijų administravimas'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'eleven'} unicClass={style.modules__checkbox}/>
                            <DropDown title={'TLK kompensacijų administravimas'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.modules__items}>
                            <Checkbox id={'twelve'} unicClass={style.modules__checkbox}/>
                            <DropDown title={'Sąsaja su „E sveikata“'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.employee__count}>
                            <h3>Darbuotojų skaičius:</h3>
                            <CountInput defaultValue={7}/>
                        </div>
                    </div>
                    <div className={style.module}>
                        <h3>Pasirinkite modulius</h3>
                        <div className={style.modules__items}>
                            <Checkbox id={'t'} unicClass={style.modules__checkbox}/>
                            <DropDown title={'Sąsaja su „Serve Online“ rezervacijų sistema“'}>
                                <div className={style.dropdown__item}>
                                    lorem ipsum
                                </div>
                            </DropDown>
                            <span className={style.price}>4,00 &euro;</span>
                        </div>
                        <div className={style.employee__count}>
                            <h3>Darbuotojų skaičius:</h3>
                            <CountInput />
                        </div>

                    </div>
                </div>
                <div className={style.right__block}>
                    dasad
                </div>
            </div>
        </div>
    );
}
