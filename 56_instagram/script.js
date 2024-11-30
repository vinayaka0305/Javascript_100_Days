const url = 'https://instagram-scraper-api3.p.rapidapi.com/user_info?username_or_id=vinayaka_av';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f046510fd4msh6cf97778ca877e1p14a542jsnb74066353fd4',
		'x-rapidapi-host': 'instagram-scraper-api3.p.rapidapi.com'
	}
};

async function displayUserData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        console.log(data);
        // Display profile picture
        document.getElementById('profile-pic').src = data.data.profile_pic_url;

        // Display full name
        document.getElementById('full-name').textContent = data.data.full_name;

        // Display bio
        document.getElementById('bio').textContent = data.data.biography;

        // Display bio link if available
        const bioLinkElement = document.getElementById('bio-link');
        if (data.data.external_url) {
            bioLinkElement.href = data.data.external_url;
            bioLinkElement.textContent = data.data.external_url;
        } else {
            bioLinkElement.style.display = 'none';
        }

        // Display posts or media
        if (data.data.media_count > 0) {
            const postContainer = document.getElementById('post-container');
            postContainer.innerHTML = '';  // Clear any previous content
            
            // Assuming data includes some post or media URLs, iterate through and display them
            data.data.posts.forEach(post => {
                const postElement = document.createElement('div');
                const img = document.createElement('img');
                img.src = post.thumbnail_url;  // Thumbnail for the post
                postElement.appendChild(img);

                postContainer.appendChild(postElement);
            });
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to fetch and display data
displayUserData();
