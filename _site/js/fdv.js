// Existing fetchDataFromAPI function
// ...

// New function to fetch and display price data
async function fetchPriceData() {
    const apiUrl = 'https://api.geckoterminal.com/api/v2/networks/base/tokens/0x7d89e05c0b93b24b5cb23a073e60d008fed1acf9?include=fdv_usd';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        const fdvUsd = json.data.attributes.fdv_usd;
        // Format the number with comma separators and prepend a "$"
        const formattedFdvUsd = `$${parseFloat(fdvUsd).toLocaleString()}`;
        document.getElementById('fdv-usd').textContent = formattedFdvUsd;
    } catch (error) {
        console.error('Could not fetch the price data:', error);
        document.getElementById('fdv-usd').textContent = 'Failed to load data.';
    }
}

// Ensure both functions are called when the script loads
fetchDataFromAPI();
fetchPriceData();
