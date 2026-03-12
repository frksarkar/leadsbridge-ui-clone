document.addEventListener('DOMContentLoaded', () => {
	const parallaxElements = document.querySelectorAll('.js-parallax');
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (!prefersReducedMotion && parallaxElements.length > 0) {
		document.addEventListener('mousemove', (e) => {
			const x = e.clientX / window.innerWidth - 0.5;
			const y = e.clientY / window.innerHeight - 0.5;

			parallaxElements.forEach((el) => {
				const speed = parseFloat(el.getAttribute('data-speed')) || 15;

				// Calculate translation
				const xOffset = x * speed;
				const yOffset = y * speed;

				// Apply translation
				el.style.transform = `translate(${xOffset}px, calc(-50% + ${yOffset}px))`;
				el.style.transition = 'transform 0.1s ease-out';
			});
		});

		// Reset transform on mouseleave
		document.addEventListener('mouseleave', () => {
			parallaxElements.forEach((el) => {
				el.style.transform = `translate(0px, -50%)`;
				el.style.transition = 'transform 1s ease-out';
			});
		});
	}

	const mobileMenuBtn = document.querySelector('button.md\\:hidden');
	if (mobileMenuBtn) {
		mobileMenuBtn.addEventListener('click', () => {
			console.log('Mobile menu clicked!');
		});
	}
});
