import { decode } from 'html-entities';
export default function Question({ data, id, selectAnswer }) {
  const buttons = data.answers.map((answer) => {
    const style = answer.isSelected
      ? 'question--button button-selected'
      : 'question--button';

    return (
      <button
        className={style}
        key={answer.id}
        onClick={() => selectAnswer(id, answer.id)}
      >
        {decode(answer.answer)}
      </button>
    );
  });

  return (
    <div className="question">
      <h4 className="question--title">{decode(data.question)}</h4>
      <div className="question--answers">{buttons}</div>
    </div>
  );
}
