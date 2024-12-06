const currentPage3 = window.location.pathname;
if (currentPage3 === '/mercury.html') {
    var canvas3 = document.getElementById('rightplanet');
} else if (currentPage3 === '/venus.html') {
    var canvas3 = document.getElementById('midplanet');
} else if (currentPage3 === '/earth.html') {
    var canvas3 = document.getElementById('leftplanet');
} else if (currentPage3 === '/sun.html') {
    var canvas3 = document.getElementById('outplanet');
}

canvas3.style.clipPath = 'circle(19.5% at 50% 50%)';

var renderer3 = new THREE.WebGLRenderer({canvas: canvas3 });
renderer3.setSize(window.innerWidth, window.innerHeight);

var scene3 = new THREE.Scene();
var camera3 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera3.position.z = 10;

var geometry3 = new THREE.SphereGeometry(4.2, 128, 128); 
var textureLoader3 = new THREE.TextureLoader();
var texture3 = textureLoader3.load('Media/Texture Maps/venus-texture.jpg');
var material3 = new THREE.MeshBasicMaterial({ map: texture3 });
var venus = new THREE.Mesh(geometry3, material3);
scene3.add(venus);

var animate3 = function () {
    requestAnimationFrame(animate3);
    venus.rotation.y += 0.005;
    renderer3.render(scene3, camera3);
};
animate3();