const getBtn = document.getElementById("getBtn");
const windSpeedTxt = document.getElementById("windSpeedTxt");
const mainTempTxt = document.getElementById("mainTempTxt");
const weatherDesTxt = document.getElementById("weatherDesTxt");
const nameTxt = document.getElementById("nameTxt");
const nameTxt1 = document.getElementById("nameTxt1");
const mainTempTxt1 = document.getElementById("mainTempTxt1");
const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.8412&units=metric&appid=b6a54df061291743bc9896df5016457e"
  );
  xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    windSpeedTxt.innerText = data.wind.speed;
    mainTempTxt.innerText = data.main.temp.toString();
    mainTempTxt1.innerText = data.main.temp.toString();
    nameTxt.innerText = data.name;
    nameTxt1.innerText = data.name;
    const id = data.weather[0].main;
    let imageUrl = "/images/Weather-No-Background.png";
    switch (id) {
      case "Clear":
        imageUrl = "/images/clear.svg";
        break;
      case "Storm":
        imageUrl = "/images/storm.svg";
        break;
      case "Snow":
        imageUrl = "/images/snow.svg";
        break;
      case "Haze":
        imageUrl = "/images/haze.svg";
        break;
      case "Clouds":
        imageUrl = "/images/cloud.svg";
        break;
      case "Rain":
        imageUrl = "/images/rain.svg";
        break;
      default:
        break;
    }
    document.getElementById("weatherImg").setAttribute("src", imageUrl);
  
  };

  xhr.send();
};
getData();
