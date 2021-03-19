
import React, {useState} from 'react'
import axios from "axios";


function App() {
  const [file, setFile] = useState()
  const [fileName, setfileName] = useState('')

  const onChange = e => {
    setFile(e.target.files[0])
    setfileName(e.target.files[0].name);

  }

  const Upload = async e => {
    // console.log('Starting...')
    e.preventDefault();
    const fromData = new FormData()
    fromData.append('uploadItem', file)

    try{
      const res = await axios.post("http://localhost:3000/upload", fromData)
      console.log(res);
    }
    catch(ex){
      console.log(ex)
    }
  }

  return (
    <div className="App">
      <input type='file' id='file' onChange={onChange}/>
      <button onClick={Upload}>Uplaod</button>
    </div>
  );
}

export default App;
