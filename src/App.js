import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import ImgList from './components/ImgList';

const App = () => {


  const [searching, setSearching] = useState('');
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState({
    currentPage:1,
    totalPages:1
  })
  const { currentPage, totalPages} = pages

  useEffect(() =>{
    
    const apiFetching = async ()=>{
      if(searching === '')return;

      const ImagesPerPage = 30;
      const apiKey = '24062452-00069afc6788085c0fc68f4a7';
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${searching}&per_page=${ImagesPerPage}&page=${currentPage}`


      const resp = await axios.get(url);
      setImages(resp.data.hits);

      
      setPages({"totalPages": Math.ceil(resp.data.totalHits / ImagesPerPage)});

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:'smooth'});

      
    }
    apiFetching();
  },[searching, currentPage]);

  const previousPage = () => {
    const newCurrentPage = currentPage - 1;
    if(newCurrentPage === 0 )return;

    setPages({"currentPage" : newCurrentPage})
  }

  const nextPage = () => {
    const newCurrentPage = currentPage + 1;

    if(newCurrentPage > totalPages)return;

    setPages({"currentPage" : newCurrentPage})
    
  }

  return ( 
    <div className="container">
      <div className="jumbotron">
        <p className="lead teaxt-center">
          Search Free Stock Images
        </p>
        <Form 
          setSearching={setSearching}
        />

      </div>

      <div className="row justify-content-center">
        <ImgList 
          images={images}
        />

        { (currentPage ===1) ? 
            null :
            (<button
            type='button'
            className='btn btn-outline-success mr-1'
            onClick={previousPage}> &laquo; Previous</button>)}
        {(currentPage === totalPages) ? 
        null :
          (<button
        type='button'
        className='btn btn-outline-success mr-1'
        onClick={nextPage}>Next &raquo;</button>) }
      </div>
    </div>
   );
}
 
export default App;