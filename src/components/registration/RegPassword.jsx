import MiniContainer from "../minicontainer/MiniContainer";
import SmartInput from "../custom/smartinput/SmartInput";
import NextButton from "../custom/buttons/NextButton";
import style from "../registration/registration.module.scss";

export default function RegPassword () {
  return (
    <div className={style.userPasswordWrapp}>
      <MiniContainer title={"Slaptažodis"} showAddress address={'El. pašto adresas'} mail={'ingrida.maliaukaite@serve.lt'}>
        <div className={style.inputWrapp}>
          <SmartInput type={"password"} placeholder={"Slaptažodis"} />
          <br />
          <SmartInput type={"password"} placeholder={"Pakartoti slaptažodį"} />
        </div>
        <div className={style.nextButton}>
          <NextButton>Toliau</NextButton>
        </div>
      </MiniContainer>
    </div>
  );
}
