import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [names, setName] = useState();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setName(res.data);
    });
  }, []);
  console.log(names);
  return names ? (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default App;
