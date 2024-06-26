const apikey = "w091i6JXyX921bGIzBV5GrsbI_D2-d2eiqAmZIjuTls";


const formel = document.querySelector('form');
const searchinp = document.getElementById("search-input");
const showmore = document.getElementById("show-more-button");
const searchresult = document.querySelector(".search-results");

let inputdata = "";
let page = 1;

async function search(){

    inputdata =  searchinp.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${apikey}`;

    const response = await fetch(url);
    const data = await response.json(); 

    const results = data.results;

    if (page === 1){
        searchresult.innerHTML = "" 
    }

    results.map((result)=>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchresult.appendChild(imageWrapper);



    });

    page++;

    if(page > 1){
        showmore.style.display ="block";   
    }
 }

 formel.addEventListener("submit", (event) => {

    event.preventDefault();
    page = 1;
    search()
 });

  showmore.addEventListener("click", (event) => {
    search();
  });

