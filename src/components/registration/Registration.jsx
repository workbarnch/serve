import style from '../registration/registration.module.scss';
import DefaultButton from '../custom/buttons/DefaultButton';
import MiniContainer from '../minicontainer/MiniContainer';
import Imone from "../../svg/Imone";
import SmartInput from "../custom/smartinput/SmartInput";
import NextButton from "../custom/buttons/NextButton";

export default function Registration() {
  return (
    <div className={style.registrWrap}>
        <MiniContainer title={'Registruotis'} showAddress address={'El. pašto adresas'} mail={'ingrida.maliaukaite@serve.lt'}>
            <DefaultButton text={'Registruotis įmonės vardu'} unicClass={style.botton}>
                <Imone />
            </DefaultButton>
            <DefaultButton text={'Registruotis fiziniam asmeniui'} unicClass={style.botton}>
                <Imone />
            </DefaultButton>
            <SmartInput type={'password'} placeholder={'El. pašto adresas'}/>
            <br/>
            <SmartInput type={'text'} placeholder={'El. pašto adresas'}/>
            <div className={style.nextButton}>
                <NextButton>
                    Toliau
                </NextButton>
            </div>
        </MiniContainer>
    </div>
  );
}
