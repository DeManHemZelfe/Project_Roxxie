import './App.css';
import photos from "./photos";
import PhotoAlbum from "react-photo-album";

const App = () => <PhotoAlbum photos={photos} layout="masonry" />;

export default App;
