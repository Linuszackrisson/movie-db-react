// HomePage.jsx
import FeaturesMovies from '../../components/featuredMovies/FeaturedMovies'
import './homepage.css'

const HomePage = ({
    handleOperations,
    lists
}) => {
  return (

    /* Rendering hard coded stuff for the home page */
    <div className='page__wrapper'>
        <section className="featured-today">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gZEOBlnFKmE"
            title="Fallout"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="info-container">
          <div className="text-container">
            <h3 className="Featured-title">Fallout</h3>
            <h4>"Fallout: Apocalypse with a punchline."</h4>
            <p>
              In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.
            </p>
            <div className="genre-container">
              <p className="genre-text">Action</p>
              <p className="genre-text">Adventure</p>
              <p className="genre-text">Drama</p>
            </div>
          </div>
          <a href="https://www.primevideo.com/detail/Fallout/0HAQAA7JM43QWX0H6GUD3IOF70" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Amazon_Prime_Video_blue_logo_1.svg/480px-Amazon_Prime_Video_blue_logo_1.svg.png" alt="Amazon Prime Video Logo" className="prime-video-logo" />
          </a>
        </div>
      </section>

    <FeaturesMovies
    handleOperations={handleOperations}
    lists={lists}
    />
    </div>
  );
};

export default HomePage;