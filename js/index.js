// Your code goes here

const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const nav = document.querySelector('nav');
const div = document.querySelectorAll('div');
const btn = document.querySelector('div.btn');
const section = document.querySelectorAll('section');
const imgs = document.querySelectorAll('img');
const buffer = [];
const colors = ['blue', 'lime', 'dodgerblue', 'purple', 'red', 'orange'];



// Load Event
window.addEventListener('load', (e) => {
	console.log("Page fully loaded");
	
	// Disclaimer Alert
	alert('IF YOU ARE PHOTO SENSITIVE LEAVE THIS PAGE IMMEDIATELY');

	// Grab some visitor information.
	buffer.push(`${window.location.hostname}, ${window.location.port}`)
	
	// Mouse Enter event
	header.addEventListener('mouseenter', (e) =>{
		e.target.style.backgroundColor = 'lime';
	})

	header.addEventListener('mouseleave', (e) =>{
		e.target.style.backgroundColor = 'purple';
	})

	// Key Down Event
	document.body.addEventListener('keydown', (e) => {
		buffer.push(`Character: ${e.code}, Character Code: ${e.keyCode}`);
	})


	section.forEach(el => {
		el.addEventListener('wheel', (e) => {
			e.target.style.backgroundColor = `${colors[Math.floor(Math.random()*colors.length)]}`
		})
	})

	// Double Click Event
	h1.addEventListener('dblclick', (e) => {
		alert(`You just double clicked on a h1 tag, very nice it goes no where, we will fix this soon`);
	})

	
	nav.addEventListener('dblclick', (e) => {
		if(e.target.tagName === "A"){
			alert(`You just double clicked on a link! But it goes nowhere sorry.`)
		} else {
			alert("You just double clicked on a nav element.....why?");
		}
	})

	nav.addEventListener('click', (e) => {
		e.preventDefault();
	})

	
	imgs.forEach(img => {
		img.addEventListener('dblclick', (e) => {
			alert('You just double clicked an image on the page...NICE!')
			e.stopPropagation();
	})

		
		img.addEventListener('mouseenter', (e) => {
			e.target.parentElement.style.width = "300%";
			e.target.style.width = '100%';
		})

		// mouseleave
		img.addEventListener('mouseleave', (e) => {
			e.target.parentElement.style.width = "48%";
		})
	})

	h2.forEach(header => {
		header.addEventListener('dblclick', (e) => {
			alert('You double clicked an h2 element!');
			// e.stopPropagation();
		})

		header.addEventListener('mouseover', (e) => {
			e.target.style.color = `${colors[Math.floor(Math.random()*colors.length)]}`;
			setTimeout(() => e.target.style.color = 'black', 500);
		});
	})

	// Dragstart & Dragend
	imgs[0].addEventListener('dragstart', dragstart);
	imgs[0].addEventListener('dragend', dragend);
	

	function dragstart (){
			 setTimeout(() => this.style.display = 'none',0);
			// console.log('dragstart');
	};

	function dragend (){
		this.style.display = 'inline';
		// console.log('end');
	};


	// Wheel Listeners
	div.forEach(el => {
		el.addEventListener('wheel', (e) => {
			e.target.style.backgroundColor = `${colors[Math.floor(Math.random()*colors.length)]}`
		})

	})

	div[6].addEventListener('click', (e) => {
		e.target.style.fontSize = '8px';
	})

	btn.addEventListener('click', (e) => {
		e.target.style.color = `${colors[Math.floor(Math.random()*colors.length)]}`;
		e.stopPropagation();
	})

})