import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([])
  const [id, setId] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

 
  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(response => response.json())
    .then(json => setComments(json))
  }, [id])

  return (
    <>
      {
        data?.map(i => {
          return (
            <details key={i.id}>
              <summary onClick={() => setId(i.id)}>{i.title}</summary>
              {comments.map(c => {
                return(
                  <li key={c.id}><mark>{c.name}</mark></li>
                )
              })}
            </details>
          )
        })
      }
    </>
  );
}

export default App;
