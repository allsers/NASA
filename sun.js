const currentPage = window.location.pathname;
if (currentPage === '/sun.html') {
    var canvas = document.getElementById('midplanet');
} else if (currentPage === '/mercury.html') {
    var canvas = document.getElementById('leftplanet');
} else if (currentPage === '/venus.html') {
    var canvas = document.getElementById('left-outplanet');
}
console.log(currentPage)
console.log(canvas)
canvas.style.clipPath = 'circle(27% at 50% 50%)';


var renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

var geometry = new THREE.SphereGeometry(5.5, 400, 400);
var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load('Media/Texture Maps/sun-texture.jpg');
var material = new THREE.MeshBasicMaterial({ map: texture });
var sun = new THREE.Mesh(geometry, material);
scene.add(sun);

var animate = function () {
    requestAnimationFrame(animate);
    sun.rotation.y += 0.004;
    renderer.render(scene, camera);
};

animate();
