const currentPage2 = window.location.pathname;
if (currentPage2 === '/sun.html') {
    var canvas2 = document.getElementById('rightplanet');
} else if (currentPage2 === '/mercury.html') {
    var canvas2 = document.getElementById('midplanet');
} else if (currentPage2 === '/venus.html') {
    var canvas2 = document.getElementById('leftplanet');
} else if (currentPage2 === '/earth.html') {
    var canvas2 = document.getElementById('left-outplanet');
}

canvas2.style.clipPath = 'circle(12% at 50% 50%)';

var renderer2 = new THREE.WebGLRenderer({canvas: canvas2 });
renderer2.setSize(window.innerWidth, window.innerHeight);

var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera2.position.z = 10;

var geometry2 = new THREE.SphereGeometry(2.8, 128, 128); 
var textureLoader2 = new THREE.TextureLoader();
var texture2 = textureLoader2.load('Media/Texture Maps/mercury-texture.jpeg');
var material2 = new THREE.MeshBasicMaterial({ map: texture2 });
var mercury = new THREE.Mesh(geometry2, material2);
scene2.add(mercury);

var animate2 = function () {
    requestAnimationFrame(animate2);
    mercury.rotation.y += 0.005;
    renderer2.render(scene2, camera2);
};

animate2();
