import logo from '../../assets/images/logo.svg';
import './Feed.css';
/*
Edit Feed.js and save to reload.
*/
function Feed() {
  return (
    <div className="Feed">
      <header className="Feed-header">
        <img src={logo} className="Feed-logo" alt="logo" />
        <p>
        Tweeple
        "Connecting Tweeple, One Tweet at a Time."
        </p>
        <a
          className="Feed-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default Feed;
