new ClipboardJS('.pic');

const output = document.getElementById('output');
const searchParams = document.getElementById('searchParams');
const loadingImage = document.querySelector('#loadingImage');

loadingImage.style.display = 'none';

searchParams.addEventListener('submit', getData);

const words = document.querySelector('.mt-4');
console.log(words.innerHTML);

// const picClick = document.querySelector('.pic');

// picClick.addEventListener('click', clicked);

function getData(e) {
  e.preventDefault();

  const searchInput = document.getElementById('searchInput');

  let param = searchInput.value;

  const url = 'http://api.giphy.com/v1/gifs/search?q=';
  const apiKey = '&api_key=EksdlNNzWpwSY6rP6LPMgWhvVfPjrTkb';
  const finalUrl = url + param + apiKey;

  output.innerHTML = '';
  loadingImage.style.display = '';

  fetch(finalUrl)
    .then(res => res.json())
    .then(data => {
      let dataInfos = data.data;

      // for (let i = 0; i < data.data.length; i++) {
      // Loop through data
      for (let dataInfo of dataInfos) {
        // console.log(dataInfos);

        output.innerHTML += `
      <div class="image-hover-text-container card mx-auto border-0 animated fadeIn">
        <div class="image-hover-image">
          <img src="${
            dataInfo.images.original.url
          }" class="img-fluid card-img pic" id="${dataInfo.id}"
            data-clipboard-text="${dataInfo.images.original.url}"> </div>
        <div class="image-hover-text pic" data-clipboard-text="${
          dataInfo.images.original.url
        }">
          <div class="image-hover-text-bubble my-auto">
            <span id="hoverText">Click to Copy</span>
          </div>
        </div>
      </div>
      `;
        searchInput.value = '';
        // console.log(dataInfo.id.length);

        // Change click to clicked
        // const imageText = document.querySelector('.image-hover-text-bubble');
        // const innerText = document.querySelector('#hoverText');
        // imageText.addEventListener('click', clicked);

        function clicked() {
          console.log('clicked yes');
          // innerText.innerText = 'Copied!';
        }
      }
      loadingImage.style.display = 'none';
    })
    .catch(error => {
      console.log(error);
    });
}
