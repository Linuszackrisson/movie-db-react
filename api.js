// api.js

import axios from 'axios';

const OMDB_API_BASE_URL = 'http://www.omdbapi.com/';
const OMDB_API_KEY = '71dd8ef'; 

// List of movie-related keywords
const words = [
  'action', 'adventure', 'animation', 'biography', 'comedy', 'crime', 'documentary', 
  'drama', 'family', 'fantasy', 'film-noir', 'history', 'horror', 'music', 'musical', 
  'mystery', 'romance', 'sci-fi', 'sport', 'thriller', 'war', 'western', 'superhero', 
  'spy', 'monster', 'zombie', 'vampire', 'alien', 'robot', 'magic'
];

// Function to fetch random movies
export const fetchRandomMovies = async () => {
    try {
      const randomMovies = [];
      
      // Fetch 10 random movies
      for (let i = 0; i < 10; i++) {
        // Generate a random word for each movie
        const randomWord = generateRandomWord();
        
        // Fetch movies using the random word as the search string
        const response = await axios.get(`${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&type=movie&s=${randomWord}`);
        
        if (!response.data || !response.data.Search || !Array.isArray(response.data.Search)) {
          throw new Error('Invalid or empty response from API');
        }
        
        // Select a random movie from the search results
        const randomIndex = Math.floor(Math.random() * response.data.Search.length);
        const randomMovie = response.data.Search[randomIndex];
        
        // Attach the random keyword to the movie object
        randomMovie.keyword = randomWord;
        
        randomMovies.push(randomMovie);
      }
      
      return randomMovies;
    } catch (error) {
      console.error('Error fetching random movies:', error);
      throw error;
    }
  };
  
  // Function to generate a random word
  const generateRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
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
