import style from '../registration/registration.module.scss';
import DefaultButton from '../custom/buttons/DefaultButton';
import MiniContainer from '../minicontainer/MiniContainer';
import Imone from "../../svg/Imone";
import SmartInput from "../custom/smartinput/SmartInput";
import NextButton from "../custom/buttons/NextButton";

export default function Registration() {
  return (
    <div className={style.registrWrap}>
        <MiniContainer title={'Registruotis'} >
            <DefaultButton text={'Registruotis įmonės vardu'} unicClass={style.botton}>
                <Imone />
            </DefaultButton>
            <DefaultButton text={'Registruotis fiziniam asmeniui'} unicClass={style.botton}>
                <Imone />
            </DefaultButton>
         
        </MiniContainer>
    </div>
  );
}
