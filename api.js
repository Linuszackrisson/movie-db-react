// api.js

import axios from 'axios';

const OMDB_API_BASE_URL = 'http://www.omdbapi.com/';
const OMDB_API_KEY = '71dd8ef'; 

// List of movie-related keywords. Used to simulate display of random movies
const words = [
  'love', 'life', 'time', 'day', 'night', 'world', 'city', 'town', 'home', 'heart', 'soul', 'dream', 'hope',
  'fear', 'joy', 'sadness', 'run', 'walk', 'jump', 'fall', 'rise', 'lost', 'found', 'memory', 'future', 'past',
  'secret', 'adventure', 'journey', 'quest', 'treasure', 'power', 'friendship', 'enemy', 'battle', 'war', 'peace',
  'discovery', 'escape', 'chase', 'race', 'puzzle', 'redemption', 'hero', 'villain', 'legend', 'destiny', 'fate'
];

// Function to generate a random word from the 'words' array
const generateRandomWord = () => {
  // Generate a random index to select a word from the 'words' array
  const randomIndex = Math.floor(Math.random() * words.length);
  // Return the randomly selected word
  return words[randomIndex];
};


// Function to fetch random movies using the OMDB API
export const fetchRandomMovies = async () => {
  try {
    // Array to store the fetched random movies
    const randomMovies = [];
    
    // Fetch 10 random movies
    for (let i = 0; i < 10; i++) {
      // Generate a random word to use as the search term for each movie
      const randomWord = generateRandomWord();
      
      // Fetch movies from the OMDB API using the random word as the search term
      const response = await axios.get(`${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&type=movie&s=${randomWord}`);
      
      // Check if the response contains valid movie data
      if (!response.data || !response.data.Search || !Array.isArray(response.data.Search)) {
        // Throw an error if the response is invalid or empty
        throw new Error('Invalid or empty response from API');
      }
      
      // Select a random movie from the search results
      const randomIndex = Math.floor(Math.random() * response.data.Search.length);
      const randomMovie = response.data.Search[randomIndex];
      
      // Attach the random keyword used for the search to the movie object
      randomMovie.keyword = randomWord;
      
      // Add the random movie to the array of random movies
      randomMovies.push(randomMovie);
    }
    
    // Return the array of random movies
    return randomMovies;
  } catch (error) {
    // Log and rethrow any errors that occur during the process
    console.error('Error fetching random movies:', error);
    throw error;
  }
};

  

// Function to search for movies by title
export const searchMoviesByTitle = async (title) => {
  try {
    const response = await axios.get(`${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&s=${title}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for movies:', error);
    throw error;
  }
};

// Function to fetch movie details by IMDB ID
export const fetchMovieDetails = async (imdbID) => {
    try {
      const response = await axios.get(`${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  };
  
// Function to fetch movie logo by IMDB ID
export const fetchMovieLogo = async (imdbID) => {
    try {
      const response = await axios.get(`${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}`);
      // Extract logo URL from response data (if available)
      const logoURL = response.data.Poster;
      return logoURL;
    } catch (error) {
      console.error('Error fetching movie logo:', error);
      throw error;
    }
  };
  
// Function to fetch movie title by IMDB ID
export const fetchMovieTitle = async (imdbID) => {
    try {
      const response = await axios.get(`${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}`);
      // Extract title from response data
      const title = response.data.Title;
      return title;
    } catch (error) {
      console.error('Error fetching movie title:', error);
      throw error;
    }
  };
  
// Function to fetch movie description by IMDB ID
export const fetchMovieDescription = async (imdbID) => {
    try {
      const response = await axios.get(`${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}`);
      // Extract description from response data
      const description = response.data.Plot;
      return description;
    } catch (error) {
      console.error('Error fetching movie description:', error);
      throw error;
    }
  };
