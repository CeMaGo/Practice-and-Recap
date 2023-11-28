// taking notes of functions

<script id="clock.js">



const clock = document.getElementById('clock');
const txt = document.getElementById('time');


const updateTime = () => {

const randNumber = Math.random()
const topOffSet = (randNumber * 100) + "%"
const leftOffSet = (randNumber * 100 ) + "%";

const currentTime = new Date();
const timeString = currentTime.toLocalTimeString();

text.textContent = timeString
text.setAttribute("style","top" + topOffSet )
}


updateTime();
setInterval(updateTime, 3000);



</script>
