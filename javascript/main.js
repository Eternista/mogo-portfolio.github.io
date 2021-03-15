//services 2

const columns = [... document.querySelectorAll("li.column")];

columns.forEach(single => {
    const singleActive = (e) => {
        if(e.target != single.children[1]){
            for(var i = 0; i < columns.length; i++) {
                if(single.contains(e.target) && single === columns[i]) {
                    single.classList.toggle('active');
                } else {
                    columns[i].classList.remove('active');
                }
            }
        }
    }
    single.addEventListener('click', singleActive)
})

const menubtn = document.querySelector(".fa-bars");
const mobilemenu = document.querySelector(".mobile-menu");

menubtn.addEventListener('click', function(){
    mobilemenu.classList.toggle('active');
    menubtn.classList.toggle('active');
})

//search

const searchOpen = document.querySelector("nav .fa-search");
const searchClose = document.querySelector(".search .fa-times-circle");
const search = document.querySelector(".search")
const html = document.querySelector('html');
const openSearch = () => {
    html.classList.add('active');
    search.classList.add('active');
}
const closeSearch = () => {
    html.classList.remove('active');
    search.classList.remove('active');
}

// openSearch();

searchOpen.addEventListener('click', openSearch);
searchClose.addEventListener('click', closeSearch);

//map
const mapContainer = document.querySelector(".map");
const mapOn = document.querySelector(".map .context");

mapboxgl.accessToken = 'pk.eyJ1IjoiejFvbGFzIiwiYSI6ImNrbGdidTZ0ZjJobXgydWxiNXd6NDZwcjMifQ.D7ChLeZiahjMrJ3Rt70THA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [20.5, 53.7833],
    zoom: 13
  });


const turn = () => {
    mapContainer.classList.toggle("active");
}

mapOn.addEventListener("click", turn)

//COUNTING

const countingElements = [... document.querySelectorAll('.counting .wrapper div h2')];
countingElements.forEach(single  => {
    const number = Number(single.textContent);
    let i = 0;
    setInterval(function(){
        if(i < number){
            i++;
            single.innerHTML = `${i}`
        }
    }, 100)
})