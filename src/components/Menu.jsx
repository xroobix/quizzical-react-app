import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Menu(props) {
    
    const [category, setCategory] = useState(0)
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const link = `https://opentdb.com/api.php?amount=5${ category > 0 ? `&category=${category}` : ``}`
        axios.get(link)
        .then((response) => {setPost(response.data.results)})
        .catch(error => {setError(error)})
    },[category])

    if (error) return `Error: ${error.message}`;
    if (!post) return ""

    function handleSubmit(e) {
        e.preventDefault()
        props.getQuestionsData(post)
    }
    
    return (
        <div className='menu'>
            <h1 className='menu--title'>Quizzical</h1>
            <form onSubmit={handleSubmit} className='menu--form'>
                <label htmlFor="category" className="menu--label">Choose category:</label>
                <select 
                    name="category" 
                    className="menu--select" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="0">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="25">Art</option>
                    <option value="21">Sports</option>
                    <option value="23">History</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="24">Politics</option>
                    <option value="20">Mythology</option>
                    <option value="22">Geography</option>
                    <option value="26">Celebrities</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="17">{`Science & Nature`}</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="13">{`Entertainment: Musicals & Theatres`}</option>
                    <option value="32">{`Entertainment: Cartoon & Animations`}</option>
                    <option value="31">{`Entertainment: Japanese Anime & Manga`}</option>
                </select>
                <input 
                    type="submit" 
                    value="Start Quiz" 
                    className="menu--button"                   
                />
            </form>
        </div>
    )
}