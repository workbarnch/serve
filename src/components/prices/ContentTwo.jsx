import style from "./prices.module.scss";
import Checkbox from "../custom/checkbox/Checkbox";
import DropDown from "../custom/dropdown/DropDown";
import CountInput from "../custom/countinput/CountInput";

export default function ContentTwo(){
    return (
        <div className={style.modules}>
            <div className={style.module}>
                <h3>Pasirinkite modulius</h3>
                <div className={style.modules__items}>
                    <Checkbox id={'t'} unicClass={style.modules__checkbox} checked/>
                    <DropDown title={'Sąsaja su „Serve Online“ rezervacijų sistema“'}>
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
