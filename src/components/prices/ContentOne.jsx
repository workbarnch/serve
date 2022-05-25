import style from "./prices.module.scss";
import Checkbox from "../custom/checkbox/Checkbox";
import DropDown from "../custom/dropdown/DropDown";
import CountInput from "../custom/countinput/CountInput";

export default function ContentOne(){
    return (
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
    )
}
