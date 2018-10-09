new ClipboardJS('.pic');

const output = document.getElementById('output');
const searchParams = document.getElementById('searchParams');
const loadingImage = document.querySelector('#loadingImage');
const searchInput = document.getElementById('searchInput');

loadingImage.style.display = 'none';

searchParams.addEventListener('submit', e => {
  e.preventDefault();

  if (searchInput.value === '') {
    console.log('nope');
  } else {
    loadingImage.style.display = '';
    output.style.display = 'none';
    getData();
    searchInput.value = '';

    setTimeout(() => {
      loadingImage.style.display = 'none';
      output.style.display = '';
    }, 1500);
  }
});

const words = document.querySelector('.mt-4');
console.log(words.innerHTML);

// const picClick = document.querySelector('.pic');

// picClick.addEventListener('click', clicked);

function getData() {
  // e.preventDefault();

  let param = searchInput.value;

  const url = 'http://api.giphy.com/v1/gifs/search?q=';
  const apiKey = '&api_key=EksdlNNzWpwSY6rP6LPMgWhvVfPjrTkb';
  const finalUrl = url + param + apiKey;

  output.innerHTML = '';

  fetch(finalUrl)
    .then(res => res.json())
    .then(data => {
      let dataInfos = data.data;

      // for (let i = 0; i < data.data.length; i++) {
      // Loop through data
      for (let i = 0; i < dataInfos.length; i++) {
        // console.log(dataInfos.length);

        output.innerHTML += `
      <div class="image-hover-text-container card mx-auto border-0 animated fadeIn" >
        <div class="image-hover-image">
          <img src="${
            dataInfos[i].images.original.url
          }" class="img-fluid card-img pic" 
            data-clipboard-text="${dataInfos[i].images.original.url}"> 
        </div>
        <div class="image-hover-text pic" data-clipboard-text="${
          dataInfos[i].images.original.url
        }" id="yes">
          <div class="image-hover-text-bubble my-auto" id="DIV_${i}">
            <span id="hoverText${i}" class="copyText">Click to Copy!</span>
          </div>
        </div>
      </div>
      `;
        // console.log(dataInfo.id.length);

        // Change click to clicked
        // const getID = document.getElementById(i).id;
        // const elementID = document.getElementById(i).id;
        // console.log(elementID);

        // let spanID = document.querySelectorAll('span');
        // let spanID = document.querySelector('span').innerText;
        // let changeText = document.querySelector('#DIV_' + i);
        // console.log(changeText);

        // console.log(changeText.childNodes[1].innerHTML);

        // const innerText = document.querySelector('#hoverText');
        // getID.addEventListener('click', clicked);
        // console.log(innerText);

        // changeText.addEventListener('click', clicked, false);
        //document.addEventListener('click', clicked);
        //document.getElementById('hoverText8').addEventListener('click', clicked);
        function reply_click(clicked_id) {
          alert(clicked_id);
        }
      }
      document.querySelector('body').addEventListener('click', function(e) {
        let element = e.target;
        let textBubble = document.querySelector('.image-hover-text-bubble');
        // console.log(textBubble);

        // console.log(element);

        // if (element.className === 'image-hover-text-bubble my-auto') {
        //   console.log(textBubble.childNodes[1].innerText);
        //   element.childNodes[1].innerText = 'Copied!';
        //   // console.log(e.target);
        //   setTimeout(() => {
        //     element.childNodes[1].innerText = 'Click to Copy!';
        //   }, 2000);
        // }

        if (element.className === 'copyText') {
          // console.log(textBubble.childNodes[1].innerText);
          element.innerText = 'Copied!';
          // console.log(e.target);
          setTimeout(() => {
            element.innerText = 'Click to Copy!';
          }, 2000);
        } else if (element.className === 'image-hover-text-bubble my-auto') {
          element.childNodes[1].innerText = 'Copied!';
          // console.log(e.target);
          setTimeout(() => {
            element.childNodes[1].innerText = 'Click to Copy!';
          }, 2000);
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
}

function clicked() {
  console.log('clicked yes');
  // changeText.childNodes[1].innerHTML = 'Copied!';
}
