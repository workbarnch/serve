import MiniContainer from "../minicontainer/MiniContainer";
import SmartInput from "../custom/smartinput/SmartInput";
import NextButton from "../custom/buttons/NextButton";
import style from "../registration/registration.module.scss";
import QuestionText from "../questionText/QuestionText"


export default function UserPassword() {
  return (
    <div className={style.userPasswordWrapp}>
      <MiniContainer
        title={"Slaptažodis"}
        showForgotPass
        showAddress
        address={"El. pašto adresas"}
        mail={"ingrida.maliaukaite@serve.lt"}
        blueText={"Pamiršai slaptažodį?"}
        orangeText={"Keisti slaptažodį"}
        show
      >
        <div className={style.inputWrapp}>
          <SmartInput type={"password"} placeholder={"Slaptažodis"} />
        </div>
        <div className={style.nextButton}>
          <NextButton>Toliau</NextButton>
        </div>
        <div className={style.questionWrapp}>
            <QuestionText show blueText={"Pamiršai slaptažodį?"} orangeText={"Keisti slaptažodį"}/>
        </div>
      </MiniContainer>
    </div>
  );
}
