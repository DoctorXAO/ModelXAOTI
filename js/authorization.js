const signIn = document.getElementById('signIn');
const overlay = document.getElementById('overlay');
const authFrame = document.getElementById('authFrame');
const closeAuthFrame = document.getElementById('closeAuthFrame');

signIn.addEventListener('click', function() {
	overlay.classList.add('show');
	authFrame.classList.add('show');
});

closeAuthFrame.addEventListener('click', function() {
	overlay.classList.remove('show');
	authFrame.classList.remove('show');
})