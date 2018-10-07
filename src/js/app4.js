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
      for (let i = 0; i < dataInfos.length; i++) {
        // console.log(dataInfos.length);

        output.innerHTML += `
      <div class="image-hover-text-container card mx-auto border-0 animated fadeIn">
        <div class="image-hover-image">
          <img src="${
            dataInfos[i].images.original.url
          }" class="img-fluid card-img pic" id="${i}"
            data-clipboard-text="${dataInfos[i].images.original.url}"> 
        </div>
        <div class="image-hover-text pic" data-clipboard-text="${
          dataInfos[i].images.original.url
        }" id="yes">
          <div class="image-hover-text-bubble my-auto">
            <span id="hoverText${i}">Click to Copy</span>
          </div>
        </div>
      </div>
      `;
        searchInput.value = '';
        // console.log(dataInfo.id.length);

        // Change click to clicked
        // const getID = document.getElementById(i).id;
        const elementID = document.getElementById(i).id;
        // let spanID = document.querySelectorAll('span');
        let spanID = document.querySelector('span').innerText;
        let changeText = document.querySelector('.image-hover-text-bubble');
        console.log(changeText.childNodes[1].innerHTML);

        // const innerText = document.querySelector('#hoverText');
        // getID.addEventListener('click', clicked);
        // console.log(innerText);

        changeText.addEventListener('click', clicked);

        function reply_click(clicked_id) {
          alert(clicked_id);
        }

        function clicked() {
          console.log('clicked yes');
          changeText.childNodes[1].innerHTML = 'Copied!';

          setTimeout(() => {
            changeText.childNodes[1].innerHTML = 'Click to Copy!';
          }, 2000);
        }
      }
      loadingImage.style.display = 'none';
    })
    .catch(error => {
      console.log(error);
    });
}
