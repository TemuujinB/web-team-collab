fetch('console.json')
    .then(response => response.json())
    .then(data => {
        const articleElements = document.getElementsByTagName('article');

        for (let i = 0; i < data.articles.length; i++) {
            const articleElement = articleElements[i];
            const article = data.articles[i];
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <h3>${article.subtitlee}</h3>
                <div>
                    <a href="${article.buyLink.href}">${article.buyLink.text}</a>
                    <a href="${article.learnMoreLink.href}">${article.learnMoreLink.text}</a>
                </div>
            `;
            articleElement.setAttribute('style', article.style);
        }
    })
    .catch(error => console.error('Error: ', error));