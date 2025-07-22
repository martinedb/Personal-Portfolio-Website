import fetch from 'node-fetch';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  API_KEY: 'ddced4a64d6fcb16b19f381a198cbd83',
  CACHE_FILE: path.join(__dirname, '../data/thumbnails-cache.json'),
  CACHE_DURATION: 7 * 24 * 60 * 60 * 1000, // 1 week in milliseconds
  OUTPUT_FILE: path.join(__dirname, '../js/thumbnails-data.js'),
  DEFAULT_IMAGE: 'https://via.placeholder.com/400x225?text=No+Preview+Available'
};

// Ensure data directory exists
fs.ensureDirSync(path.dirname(CONFIG.CACHE_FILE));

// Load or initialize cache
let cache = {};
if (fs.existsSync(CONFIG.CACHE_FILE)) {
  try {
    cache = JSON.parse(fs.readFileSync(CONFIG.CACHE_FILE, 'utf-8'));
  } catch (error) {
    console.error('Error loading cache file, initializing new cache');
    cache = {};
  }
}

// Import articles data
const { articles } = await import('../js/articles.js');

/**
 * Fetches article metadata from LinkPreview API
 * @param {string} url - The article URL
 * @returns {Promise<Object>} Article metadata
 */
async function fetchArticleMetadata(url) {
  const cacheKey = Buffer.from(url).toString('base64');
  const now = Date.now();
  
  // Check cache first
  if (cache[cacheKey] && (now - cache[cacheKey].timestamp < CONFIG.CACHE_DURATION)) {
    console.log(`Using cached data for: ${url}`);
    return cache[cacheKey].data;
  }

  console.log(`Fetching data for: ${url}`);
  
  try {
    const response = await fetch(`https://api.linkpreview.net/?key=${CONFIG.API_KEY}&q=${encodeURIComponent(url)}`);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    
    // Cache the response
    cache[cacheKey] = {
      timestamp: now,
      data: data
    };
    
    // Save updated cache
    fs.writeFileSync(CONFIG.CACHE_FILE, JSON.stringify(cache, null, 2));
    
    return data;
  } catch (error) {
    console.error(`Error fetching data for ${url}:`, error.message);
    return {
      title: '',
      description: '',
      image: CONFIG.DEFAULT_IMAGE,
      url: url,
      error: error.message
    };
  }
}

/**
 * Processes all articles and generates thumbnails data
 */
async function generateThumbnailsData() {
  const results = [];
  
  for (const article of articles) {
    try {
      const metadata = await fetchArticleMetadata(article.link);
      
      results.push({
        title: article.title,
        organization: article.organization,
        link: article.link,
        tags: article.tags,
        thumbnail: metadata.image || CONFIG.DEFAULT_IMAGE,
        description: metadata.description || '',
        fetchedAt: new Date().toISOString()
      });
      
      // Add a small delay between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Error processing article ${article.title}:`, error);
      
      // Add article with default values in case of error
      results.push({
        title: article.title,
        organization: article.organization,
        link: article.link,
        tags: article.tags,
        thumbnail: CONFIG.DEFAULT_IMAGE,
        description: '',
        error: error.message,
        fetchedAt: new Date().toISOString()
      });
    }
  }
  
  // Save the results to a JS file that can be included in the frontend
  const jsContent = `// Auto-generated on ${new Date().toISOString()}
const articlesWithThumbnails = ${JSON.stringify(results, null, 2)};

export { articlesWithThumbnails };`;
  
  fs.ensureDirSync(path.dirname(CONFIG.OUTPUT_FILE));
  fs.writeFileSync(CONFIG.OUTPUT_FILE, jsContent);
  
  console.log(`\n✅ Successfully generated thumbnails data for ${results.length} articles`);
  console.log(`Output file: ${CONFIG.OUTPUT_FILE}`);
}

// Run the script
generateThumbnailsData().catch(console.error);
