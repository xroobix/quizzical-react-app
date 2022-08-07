import { decode } from 'html-entities';
export default function Question({
  data,
  id,
  selectAnswer,
  checked,
}) {
  const buttons = data.answers.map((answer) => {
    let buttonClass = '';
    if (checked) {
      if (answer.isCorrect && answer.isSelected) {
        buttonClass = 'question--button button-correct';
      } else if (answer.isSelected) {
        buttonClass = 'question--button button-incorrect';
      } else {
        buttonClass = 'question--button';
      }
    } else {
      if (answer.isSelected) {
        buttonClass = 'question--button button-selected';
      } else {
        buttonClass = 'question--button';
      }
    }

    return (
      <button
        className={buttonClass}
        key={answer.id}
        onClick={() => selectAnswer(id, answer.id)}
        disabled={checked}
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
