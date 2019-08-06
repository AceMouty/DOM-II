// Your code goes here

const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const nav = document.querySelector('nav');
const div = document.querySelectorAll('div');
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

	// Key Down Event
	document.body.addEventListener('keydown', (e) => {
		buffer.push(`Character: ${e.code}, Character Code: ${e.keyCode}`);
	})

	// Wheel Listeners
	div.forEach(el => {
		el.addEventListener('wheel', (e) => {
			e.target.style.backgroundColor = `${colors[Math.floor(Math.random()*colors.length)]}`
		})
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

	// Double Click Event
	nav.addEventListener('dblclick', (e) => {
		if(e.target.tagName === "A"){
			alert(`You just double clicked on a link! But it goes nowhere sorry.`)
		} else {
			alert("You just double clicked on a nav element.....why?");
		}
	})

	
	imgs.forEach(img => {

		// Double click
		img.addEventListener('dblclick', () => alert('You just double clicked an image on the page...NICE!'))

		// mouseenter 
		img.addEventListener('mouseenter', (e) => {
			e.target.parentElement.style.width = "300%";
			e.target.style.width = '100%';
		})

		// mouseleave
		img.addEventListener('mouseleave', (e) => {
			e.target.parentElement.style.width = "48%";
		})
	})


})