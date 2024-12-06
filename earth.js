const currentPage4 = window.location.pathname;
if (currentPage4 === '/venus.html') {
    var canvas4 = document.getElementById('rightplanet');
} else if (currentPage4 === '/earth.html') {
    var canvas4 = document.getElementById('midplanet');
} else if (currentPage4 === '/moon.html') {
    var canvas4 = document.getElementById('leftplanet');
} else if (currentPage4 === '/mercury.html') {
    var canvas4 = document.getElementById('outplanet');
}

canvas4.style.clipPath = 'circle(19.5% at 50% 50%)';

var renderer4 = new THREE.WebGLRenderer({canvas: canvas4 });
renderer4.setSize(window.innerWidth, window.innerHeight);

var scene4 = new THREE.Scene();
var camera4 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera4.position.z = 10;

var geometry4 = new THREE.SphereGeometry(4.42, 128, 128); 
var textureLoader4 = new THREE.TextureLoader();
var texture4 = textureLoader4.load('Media/Texture Maps/earth-texture.jpg');
var material4 = new THREE.MeshBasicMaterial({ map: texture4 });
var earth = new THREE.Mesh(geometry4, material4);
scene4.add(earth);

var animate4 = function () {
    requestAnimationFrame(animate4);
    earth.rotation.y += 0.005;
    renderer4.render(scene4, camera4);
};
animate4();