import { useState } from 'react';
import SearchBar from './components/SearchBar';
import unsplash from './components/api/unsplash';

function App() {

  const [image, setImage] = useState('');

  const onSearchSubmit = async(term) => {
   const response = await unsplash.get('/search/photos', {
      params: { query: term },     
    })
    
    console.log(response.data.results)
    setImage(response.data.results)
  }

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={onSearchSubmit}/>
      Found: {image.length} images
    </div>
  );
}

export default App;
