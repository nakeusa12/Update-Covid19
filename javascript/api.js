function getApiCorona() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.kawalcorona.com/indonesia/"; 
    fetch(proxyurl + url) 
    .then(function (response) {
        if (response) {
          response.json().then(function (data) {
            let positifHTML = "";
            let sembuhHTML = "";
            let meninggalHTML = "";
            data.forEach(function (data) {
                positifHTML += `
                <div class="data-positif">
                    <p>${data.positif}</p>
                </div>
              `;
              sembuhHTML += `
              <div class="data-sembuh">
                <p>${data.sembuh}</p>
                </div>
              `;
              meninggalHTML += `
              <div class="data-meninggal">
              <p>${data.meninggal}</p>
            </div>
              `
            });

            document.querySelector(".data-positif").innerHTML = positifHTML;
            document.querySelector(".data-sembuh").innerHTML = sembuhHTML;
            document.querySelector(".data-meninggal").innerHTML = meninggalHTML;
          });
        }
      });
}
