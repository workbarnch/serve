import style from "../../components/questionText/questionText.module.scss";

export default function QuestionText({
  blueText = "",
  orangeText = "",
  show = false,
}) {
  return (
    <div className={style.container_text}>
      {show ? (
        <div className={style.question_textWrap}>
          <ul>
            <li>
              <span>{blueText}</span>
            </li>
            <li>
              <a href="#">{orangeText}</a>
            </li>
          </ul>
        </div>) : null}
    </div>
  );
}
