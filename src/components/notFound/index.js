import { Link } from 'react-router-dom';
import './notFound.scss'

export default function NotFound() {
  return (
    <div className='not-found'>
      <div className='left'>
        <div className='center white'>
          <div className='face'>:(</div>
          <p className='text'>Oh, Just Chilling</p>
        </div>
      </div>
      <div className='right'>
        <div className='center pink'>
          <div className='face'>4 0 4</div>
          <p className='text'>Page Not Found</p>
        </div>
      </div>
      <div className='btn'>
        <Link to='/'>
          <div className='pink'>Back T</div>
          <div className='white'>o Home</div>
        </Link>
      </div>
    </div>
  );
}
