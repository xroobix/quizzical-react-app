import { decode } from 'html-entities';
export default function Question({ data, id }) {
  const buttons = data.answers.map((answer) => {

    const style = answer.isSelected ? "question--button-selected" : "question--button"

    return (
      <button
        className={style}
        key={answer.id}
      >
        {decode(answer.answer)}
      </button>
      )
  });

  return (
    <div className="question">
      <h4 className="question--title">{decode(data.question)}</h4>
      <div className="question--answers">
      {buttons}
      </div>
    </div>
  );
}
