import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import ImgList from './components/ImgList';

const App = () => {


  const [state, setState] = useState({
    searching:'',
    images:[]

  });
  const {searching, images} = state;

  useEffect(() =>{
    
    const apiFetching = async ()=>{
      if(searching === '')return;

      const ImagesPerPage = 30;
      const apiKey = '24062452-00069afc6788085c0fc68f4a7';
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${searching}&per_page=${ImagesPerPage}`


      const resp = await axios.get(url);
      setState({images:resp.data.hits});

    }
    apiFetching();
  },[searching])

  return ( 
    <div className="container">
      <div className="jumbotron">
        <p className="lead teaxt-center">
          Search Free Stock Images
        </p>
        <Form 
          setState={setState}
        />

      </div>

      <div className="row justify-content-center">
        <ImgList 
          images={images}
        />
      </div>
    </div>
   );
}
 
export default App;