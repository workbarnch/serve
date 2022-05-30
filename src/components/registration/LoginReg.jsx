import MiniContainer from "../minicontainer/MiniContainer";
import SmartInput from "../custom/smartinput/SmartInput";
import NextButton from "../custom/buttons/NextButton";
import style from "../registration/registration.module.scss";
import QuestionText from "../questionText/QuestionText";

export default function LoginReg () {
  return (
    <div className={style.loginRegWrapp}>
      <MiniContainer title={"Prisijungti"} >
        <div className={style.newUser}>
          <QuestionText show blueText={"Naujas vartotojas?"} orangeText={"Registruotis"}/>
        </div>
        <div className={style.inputWrapp}>
          <SmartInput type={"text"} placeholder={"El. pašto adresas"} />
        </div>
        <div className={style.nextButton}>
          <NextButton>Toliau</NextButton>
        </div>
      </MiniContainer>
    </div>
  );
}
