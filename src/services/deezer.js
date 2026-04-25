// This file handles all network requests to the Deezer API.
// It routes traffic through our local Vite proxy (/api) to bypass CORS blocks.

/**
 * Searches the Deezer database for tracks matching a keyword.
 * * @param {string} searchWord - The artist or song title to search for (e.g., "Eminem").
 * @returns {Promise<Array>} An array of track objects, or an empty array if the network fails.
 */
export const searchTracks = async (searchWord) => {
  try {
    const response = await fetch(`/api/search?q=${searchWord}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;

  } catch (error) {
    console.error("Deezer fetch failed:", error);
    return []; 
  }
};