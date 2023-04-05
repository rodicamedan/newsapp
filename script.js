//const apiKey = "8c6255310e15495485f78bb17b744a5e";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8c6255310e15495485f78bb17b744a5e`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Network response was not ok (${response.status} ${response.statusText})`
      );
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // log the data object to the console
    const articles = data.articles;
    const newsList = document.getElementById("newsList");

    articles.forEach((article) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${article.url}">
          <img src="${article.urlToImage}" alt="${article.title}">
          <h2>${article.title}</h2>
        </a>
        <p>${article.description}</p>
      `;
      newsList.appendChild(li);
    });
  })
  .catch((error) => console.log(error));
