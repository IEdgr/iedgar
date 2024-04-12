
document.body.style.backgroundImage = "url('water.jpg')"; // Set the background image

let wave = document.createElement('div');
wave.classList.add('wave');
document.body.appendChild(wave);

document.addEventListener('mousemove', function(e) {
    wave.style.left = e.pageX + 'px';
    wave.style.top = e.pageY + 'px';
});
