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
                <h3>Jumlah Positif :</h3>
                <p>${data.positif}</p>
              `;
              sembuhHTML += `
              <h3>Jumlah sembuh :</h3>
              <p>${data.sembuh}</p>
              `;
              meninggalHTML += `
              <h3>Jumlah meninggal :</h3>
              <p>${data.meninggal}</p>
              `
            });

            document.querySelector(".positif").innerHTML = positifHTML;
            document.querySelector(".sembuh").innerHTML = sembuhHTML;
            document.querySelector(".meninggal").innerHTML = meninggalHTML;
          });
        }
      });
}
