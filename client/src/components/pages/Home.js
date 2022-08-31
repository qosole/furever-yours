import React from 'react';
import '../../Style.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Hint } from 'react-autocomplete-hint';

function Home() {
  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')
const getData = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    var hintArray = []
     res.data.map(a => hintArray.push(a.name))
      setHintData(hintArray)
}

useEffect(()=> {
  getData()
})

return (
    <div className="SearchBar">
      <h5>Sup girl im working</h5>
      <code>{`[${hintData.toString()}]`}</code>
      <br/>
      <br/>
      <br/>
    <Hint options={hintData} allowTabFill>
    <input className='input-with-hint'
        value={text}
        onChange={e => setText(e.target.value)} 
        />
      </Hint>
    </div>
  );
}





//   return (
    

      // <p>
      //   Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
      //   Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
      //   mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
      //   lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      //   imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
      //   in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      // </p>
    
//   );
// }

export default Home;