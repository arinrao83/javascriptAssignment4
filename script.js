function showPicture(){
    const imageContainer = document.getElementById('image-container');
    const description = document.getElementById('description');
    const loading = document.getElementById('loading');
    
    // Show loading indicator
    loading.style.display = 'block';
    fetch('https://api.nasa.gov/planetary/apod?api_key=frpWyfYiha77CzhCXlU6CSxOfrVOqlsYunLSJkP7')
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
}

setTimeout(showPicture, 2000);
// show people in spac
const peopleDiv = document.querySelector("#people");

document.getElementById('fetchData').addEventListener('click', function() {
    // clear the previous data
    peopleDiv.innerHTML = "";
    fetch('http://api.open-notify.org/astros.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('response error');  
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const h2 = document.createElement("h2");
        h2.textContent = `There are currently ${data.number} people in space.`;
        
        peopleDiv.appendChild(h2);
        data.people.forEach(person => {
            const p = document.createElement("p");
            p.textContent = `${person.name} (${person.craft})`;
            peopleDiv.appendChild(p);
        });
        // create delete button to clear the info
        const deleteInfo = document.createElement("button");
        deleteInfo.textContent = "Delete";
        deleteInfo.classList.add("delete");
        peopleDiv.appendChild(deleteInfo);
        deleteInfo.addEventListener("click",function(){
            peopleDiv.innerHTML = "";
        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
    
    
});
