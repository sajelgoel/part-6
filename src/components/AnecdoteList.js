
import { useSelector, useDispatch } from "react-redux";
import {addVote} from '../reducers/anecdoteReducer';

export const AnecdoteList = () => {
    const dispatch = useDispatch();
  
    const anecdotes = useSelector((state) => state.anecdote);
    const filter = useSelector((state)=> state.filter)
    let list = [...anecdotes]
  
    const vote = (content) => {
      dispatch(addVote(content));
    };
  
    if(filter.value){
      list = list.filter((anecdote)=> anecdote.content.includes(filter.value))
    }
    return (
      <>
        {list.map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        ))}
      </>
    );
  };


  export default AnecdoteList;