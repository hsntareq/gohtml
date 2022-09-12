const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	});
};

document.querySelector('.scroll-to-top-btn').onclick = scrollToTop;

document.querySelector('.copy-right-year').innerText = new Date().getFullYear();
