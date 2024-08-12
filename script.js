document.getElementById('fetchData').addEventListener('click', function() {
    const imageContainer = document.getElementById('image-container');
    const description = document.getElementById('description');
    const loading = document.getElementById('loading');
    
    // Show loading indicator
    loading.style.display = 'block';
    
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => response.json())
        .then(data => {
            // Hide loading indicator
            loading.style.display = 'none';
            
            // Display image and description
            imageContainer.innerHTML = `<img src="${data.url}" alt="${data.title}">`;
            description.innerText = data.explanation;
        })
        .catch(error => {
            // Hide loading indicator
            loading.style.display = 'none';
            
            // Display error message
            imageContainer.innerHTML = `<p style="color: #ff4d4d;">Error fetching data. Please try again later.</p>`;
            console.error('Error:', error);
        });
});
