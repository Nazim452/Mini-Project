
const accessKey = "xPI8pBIZOgY8IgaBazSrqTJPhrrAJdFsvG-O7U6J6uM";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-res");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;



async function searchImages() {
    keyword = searchBox.value;
    // const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}`;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;


    const response = await fetch(url);
    const data = await response.json();
    const results = data.result;


    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.hrf = result.link.html;
        imageLink.target = "_blank";


    })
    
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})














