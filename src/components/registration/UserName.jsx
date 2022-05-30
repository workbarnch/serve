import MiniContainer from '../minicontainer/MiniContainer';
import SmartInput from "../custom/smartinput/SmartInput";
import NextButton from "../custom/buttons/NextButton";
import style from '../registration/registration.module.scss';


export default function UserName() {
     return (
        <div className={style.userNameWrapp}>
             <MiniContainer title={'Prisijungimo vardas'}>
                    <div className={style.inputWrapp}>
                        <SmartInput type={'text'} placeholder={'El. pašto adresas'}/>
                    </div>
                    <div className={style.nextButton}>
                <NextButton>
                    Toliau
                </NextButton>
            </div>
             </MiniContainer>
        </div>
     )
}