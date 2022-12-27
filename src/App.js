import './App.css';
import photos from "./photos";
import PhotoAlbum from "react-photo-album";


function App() {
    return (
        <div>
         <div>Test</div>
         <div>
          <PhotoAlbum photos={photos} layout="masonry"></PhotoAlbum>
         </div>
        </div>
    )
}
export default App;
