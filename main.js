
let form = document.querySelector('form');

let input = document.querySelector('input')

let h1 = document.querySelector('h1')

let h2 = document.querySelector('h2');

let p = document.querySelector('p')

let img = document.querySelector('img')

let card = document.querySelector('.card')



const getWeather = async (e) => {
    e.preventDefault();

    try {
        const sunny = 
        await fetch(`https://api.weatherapi.com/v1/current.json?key=94cc357ee3664129be9224911241501&q=${input.value}&aqi=yes`)
       
        const data = await sunny.json()
   
       card.className = "card p-5 rounded-0 shadow-lg"
        
       // console.log(data.location.name)
   
       h1.innerText = data.current.temp_c + '°'
       h2.innerText = data.location.name
       p.innerText = data.current.condition.text;
       img.setAttribute('src', data.current.condition.icon)
    } 
    catch (error) {
        window.alert('please enter valid city name')
        card.className = "card p-5 rounded-0 shadow-lg d-none"
    }

    form.reset()
}



form.addEventListener('submit', getWeather)