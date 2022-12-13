const getBtn = document.getElementById("getBtn");
const listmusic = document.getElementById("listmusic");
const user = document.getElementById("user");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const getData = () =>{
	const music = new XMLHttpRequest();
	music.open(
	"GET",
	"http://localhost/php/music.php"
	);
	music.onload = () => {
		const data = JSON.parse(music.response);
        listmusic = data.music;
	};
	music.send();
	const user = new XMLHttpRequest();
	user.open(
		"GET",
		"http://localhost/login/index.php"
	);
	user.onload  =() => {
		const user = JSON.parse(index.response);
		admin_demo = user.user;
	};
	user.send();

};
getData();
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
