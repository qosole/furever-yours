import React from 'react';
import '../../Style.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import SearchBar from '../SearchBar';


export default function Home() {

  const [pet, setPet] = useState('');
  const [city, setCity] = useState('');
  const [search, setSearch] = useState({pet:"", city:""});


  return (
    <div>
      <h1>Home</h1>
      
      <div className="searchform">
        <form id="form" className="form" >
          <div className="field">
            <input
              type="text"
              placeholder="search for a pet"
              value= {pet}
              onChange={event=>setPet(event.target.value)}
            />
            <input
              type="text"
              placeholder="city"
              value= {city}
              onChange={event=>setCity(event.target.value)}
            />
             <button className="searchbtn"
             onClick={event=>{
              event.preventDefault()
              setSearch({pet, city})
            }}
             > 
             <FontAwesomeIcon icon={ faMagnifyingGlass } size= '2x'/>
             </button>
          </div>
        </form>
      </div>

      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <SearchBar pet={search.pet} city={search.city}/>
    </div>
  );
}

// import {useEffect, useState} from 'react';
// import axios from 'axios';
// import { Hint } from 'react-autocomplete-hint';

// function Home() {
//   const [hintData, setHintData] = useState([])
//   const [text, setText] = useState('')
// const getData = async () => {
//   const res = await axios.get('"pet link')
//     var hintArray = []
//      res.data.map(a => hintArray.push(a.name))
//       setHintData(hintArray)
// }

// useEffect(()=> {
//   getData()
// })

// return (
//     <div className="SearchBar">
//       <h5>Sup girl im working</h5>
//       <code>{`[${hintData.toString()}]`}</code>
//       <br/>
//       <br/>
//       <br/>
//     <Hint options={hintData} allowTabFill>
//     <input className='hint-input'
//         value={text}
//         onChange={e => setText(e.target.value)} 
//         />
//       </Hint>
//     </div>
//   );
// }



// export default function Home() {
//   return (
//     <section>
//         <div className="container">
//             <div className="content">
//               <form className='form-inline'>
//                 <div className="input-group">
//                   <input type='text' id='search' className="form-control search-form" placeholder="Scooby Doo"></input>
//                     <button id="search-this"type="button" className="pull-right btn btn-default search-btn">
//                         <i className="fa fa-search"></i>
//                     </button>
//                 </div>
//               </form>
//           </div>
//         </div>
      
//      <p>
//         Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
//         Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
//         mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
//         lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//         imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
//         in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
//       </p>
//   </section>
//   );
// }
