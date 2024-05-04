// fetchApiData.js
async function fetchDataFromAPI() {
    const apiUrl = 'https://api.member.clinic/circulating_supply.txt';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        // Parse the data as a float, convert it to an integer, and then format it with comma separators
        const integerData = parseInt(parseFloat(data));
        const formattedData = integerData.toLocaleString();
        document.getElementById('api-data-header').textContent = formattedData;
    } catch (error) {
        console.error('Could not fetch the data:', error);
        document.getElementById('api-data-header').textContent = 'Failed to load data.';
    }
}

// Ensure fetchDataFromAPI is called when the script loads
fetchDataFromAPI();
