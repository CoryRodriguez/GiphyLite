const output = document.getElementById('output');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('submit', e => {
  e.preventDefault();
  output.innerHTML = '';

  let param = searchInput.value;
  const url = 'http://api.giphy.com/v1/gifs/search?q=';
  const apiKey = '&api_key=EksdlNNzWpwSY6rP6LPMgWhvVfPjrTkb';
  const finalUrl = url + param + apiKey;

  console.log(param);

  fetch(finalUrl)
    .then(res => res.json())
    .then(data => {
      let dataInfo = data.data;

      // Loop through data
      dataInfo.forEach(x => {
        output.innerHTML += `
        <a href="${x.images.original.url}" target="_blank" >
          <img src="${
            x.images.original.url
          }" class="img-fluid card no-gutters" alt="">
        </a>
      `;
        searchInput.value = '';
      });
    })
    .catch(error => {
      console.log(error);
    });
});

// <div class="card mx-auto border-0 animated fadeIn">
//     <img src="${
//       x.images.original.url
//     }" class="img-fluid card-img pic" id="" data-clipboard-text="${
//   x.images.original.url
// }">
// </div>
