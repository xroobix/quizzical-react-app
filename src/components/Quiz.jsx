import Question from './Question'
import {useEffect, useState} from 'react'
import { nanoid } from 'nanoid'
export default function Quiz(props){

    const [data, setData] = useState(() => props.data)

    const questions = data.map(question => (
        <Question 
            key={nanoid()}
            data={question}
        />
    ))
    

    return(
        <div className="quiz">
            {questions}
            <button>Check answers</button>
        </div>
    )
}