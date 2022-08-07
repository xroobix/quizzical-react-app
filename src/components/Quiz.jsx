import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Question from './Question';

export default function Quiz(props) {
  const [data, setData] = useState(() => getData());

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function getData() {
    const requiredData = props.data.map((piece) => {
      const correctAnswer = {
        answer: piece.correct_answer,
        isCorrect: true,
        isSelected: false,
        id: nanoid(),
        checked: false,
      };
      const inCorrectAnswers = piece.incorrect_answers.map(
        (answer) => ({
          answer: answer,
          isCorrect: false,
          isSelected: false,
          id: nanoid(),
          checked: false,
        })
      );

      const allAnswers = inCorrectAnswers;

      allAnswers.push(correctAnswer);

      shuffleArray(allAnswers);

      return {
        id: nanoid(),
        question: piece.question,
        answers: allAnswers,
      };
    });

    return requiredData;
  }

  function selectAnswer(questionId, answerId) {
    setData((oldData) =>
      oldData.map((question) => {
        const replaceQuestions = question.answers.map((answer) =>
          answerId === answer.id
            ? { ...answer, isSelected: true }
            : { ...answer, isSelected: false }
        );

        return questionId === question.id
          ? { ...question, answers: replaceQuestions }
          : question;
      })
    );
  }

  const questions = data.map((questionData) => (
    <Question
      key={questionData.id}
      data={questionData}
      id={questionData.id}
      selectAnswer={selectAnswer}
    />
  ));

  return (
    <div className="quiz">
      {questions}
      <button className="quiz--button">Check answers</button>
    </div>
  );
}
