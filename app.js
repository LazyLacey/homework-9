
// Урлы
const API = "https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";
// Массив с цветами
const colorsArr = ["#14cc8d", "#1481cc", "#cc3114", "#bb14cc", "#14ccbb", "#5f14cc", "#cc8d14"];
// выборка элементов по ID
const newArticleButton = document.getElementById("btn");

// Получаем рандомный цвет для фона
function getRandomColor() {
  return colorsArr[Math.round(Math.random()*(6 - 0) + 0)];
}

// напишем функцию getData
function getData(search) {
  // отправили запрос
    
    fetch(API + encodeURIComponent(search))
    .then(function(response) { 
      console.log(response)
      return response.json(); })
      .then(data => {
        const results = data.query.search;
        console.log(data)
        console.log(results);
        document.body.style.background = getRandomColor();
        var mainDiv = document.getElementsByClassName('main')[0];
        var resultsCount = `Найдено ${data.query.searchinfo.totalhits} результатов `;
        if(mainDiv != undefined)
          mainDiv.innerHTML = resultsCount;
        else
        {
          mainDiv = document.createElement('div')
          mainDiv.className = "main"
          mainDiv.innerHTML = resultsCount
          document.body.appendChild(mainDiv)
        }
        console.log(mainDiv)
        for ( i in results){
          div = document.createElement('div');
          div.className = "result"
          div.innerHTML=`<h1>${results[i].title}</h1> ${results[i].snippet}...`;
          mainDiv.appendChild(div)
          
        }
        
      })
        
};

function find(){
  return document.getElementById("txt").value
  }


newArticleButton.addEventListener('click', () => {
  getData(find())
})



