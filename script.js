let cardList = document.querySelector('.cards-list');

fetch('./projects.json')
.then(response => response.json())
.then(data => data.map(item => {
    cardList.innerHTML += `
    <div class="card-project">
        <img src="${item.projectimage}" alt="project">
        <div class="container-project">
            <h4><b>${item.projectname}</b></h4>
            <a href="${item.projectlive}" target="_blank">Live Project</a>
            <a href="${item.projectgithub}" target="_blank">Github Code</a>
        </div>
    </div>
    `
}));

// {
//     "id": 6,
//     "projectlive": "https://www.360.cn",
//     "projectname": "HuddiCinema",
//     "projectimage": "http://www.profipet.ro/wp-content/uploads/2021/01/pisici-albe-1.jpg",
//     "projectgithub": "https://github.com/hamudiaqeed/Huddi-Cinema"
//   },
//   {
//     "id": 7,
//     "projectlive": "https://www.fema.gov",
//     "projectname": "Pokedex",
//     "projectimage": "http://www.profipet.ro/wp-content/uploads/2021/01/pisici-albe-1.jpg",
//     "projectgithub": "https://www.narod.ru"
//   },
//   {
//     "id": 8,
//     "projectlive": "https://www.youku.com",
//     "projectname": "ToDoList",
//     "projectimage": "http://www.profipet.ro/wp-content/uploads/2021/01/pisici-albe-1.jpg",
//     "projectgithub": "https://www.gnu.org"
// }

