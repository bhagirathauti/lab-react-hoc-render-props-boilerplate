import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageHoc from './components/HOC/likeImageHoc';
import LikePostHoc from './components/HOC/likePostHoc';
import LikeImageRender from './components/Render Props/LikeImgRender';
import LikePostRender from './components/Render Props/LikePostRender';

function App() {
  return (
    <div>
      <div className='buttons'>
        <div>
        <h1>Some Blog Original</h1>
        <LikeImage/>
        <LikePost/>
        </div>
        <div>
        <h1>Using HOC</h1>
        <LikePostHoc/>
        <LikeImageHoc/>
        </div>
        <div>
        <h1>Using Render Props</h1>
        <LikeImageRender/>
        <LikePostRender/>
        </div>
      </div>
    </div>
  );
}

export default App;
