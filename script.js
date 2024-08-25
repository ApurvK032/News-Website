document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');

    // Replace 'your_api_key_here' with your actual API key from a news provider
    const apiKey = '3131aad42ce64702a72135ee7b86dfb1';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            articles.forEach(article => {
                const newsArticle = document.createElement('article');
                newsArticle.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(newsArticle);
            });
        })
        .catch(error => {
            console.error('Error fetching the news:', error);
            newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
        });
});
