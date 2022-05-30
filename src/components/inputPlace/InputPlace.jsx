import NextButton from "../custom/buttons/NextButton";
import style from "../inputPlace/inputPlace.module.scss";

export default function InputPlace({children,title}) {
  return (
    <div className={style.businessInfoWrap}>
      <div className={style.container}>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
        <div className={style.content}>
          {children}
        </div>
        <div className={style.nextButton}>
          <NextButton>Toliau</NextButton>
        </div>
      </div>
    </div>
  );
}
