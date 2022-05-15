import { useDispatch } from "react-redux";
import { createAnecdotes } from "../reducers/anecdoteReducer";


 const AnecdoteForm = () => {
    const dispatch = useDispatch();
  
    const create = async (event) => {
      event.preventDefault();
      const content = event.target.anecdote.value;
      event.target.anecdote.value = "";
      dispatch(createAnecdotes(content));
    };
  
    return (
      <>
        <h2>create new</h2>
        <form onSubmit={create}>
          <div>
            <input name="anecdote" />
          </div>
          <button type="submit">create</button>
        </form>
      </>
    );
  };

  export default AnecdoteForm;