import style from "../../components/businessInfo/businessInfo.module.scss";
import CustomInput from "../../components/custom/customInput/CustomInput";


export default function BusinessInfo() {
  return (
    <div className={style.inputWrap}>
      <div className={style.leftSide}>
        <CustomInput type={"text"} placeholder={"Įmonės pavadinimas"}/>
        <CustomInput type={"text"} placeholder={"Įmonės kodas"} />
        <CustomInput type={"text"} placeholder={"Įmonės PVM kodas"}/>
        <CustomInput type={"text"} placeholder={"Sąskaitos numeris"}/>
        <CustomInput type={"text"} placeholder={"Sutartį pasirašančio - vardas, pavardė"}/>
        <CustomInput type={"text"} placeholder={"Sutartį pasirašančio - el. pašto adresas"}/>
      </div>
      <div classname={style.rightSide}>
        <CustomInput type={"text"} placeholder={"Šalis"}/>
        <CustomInput type={"text"} placeholder={"Miestas"}/>
        <CustomInput type={"text"} placeholder={"Gatvė"}/>
        <div className={style.inputs}>
        <CustomInput type={"text"} placeholder={"Namo nr."}/>
        <CustomInput type={"text"} placeholder={"Buto nr."}/>
        </div>
        <CustomInput type={"text"} placeholder={"El. pašto adresas"}/>
        <CustomInput type={"text"} placeholder={"Telefono numeris"}/>
      </div>
    </div>
  );
}
