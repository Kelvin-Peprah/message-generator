const displayMessage = document.getElementById('container');
const buttonElement = document.getElementById('display-btn');

const messages = [
	'Believe in yourself and all that you are!',
	'Success is not final, failure is not fatal: It is the courage to continue that counts.',
	'The harder you work for something, the greater you’ll feel when you achieve it.',
	'Don’t watch the clock; do what it does. Keep going.',
	'Your limitation—it’s only your imagination.',
	'Push yourself, because no one else is going to do it for you.',
	'Great things never come from comfort zones.',
	'Dream it. Wish it. Do it.',
	'Success doesn’t just find you. You have to go out and get it.',
	'Sometimes later becomes never. Do it now.',
	'The only limit to our realization of tomorrow is our doubts of today.',
	'Dream big and dare to fail.',
	'It’s going to be hard, but hard does not mean impossible.',
	'Don’t stop when you’re tired. Stop when you’re done.',
	'Wake up with determination. Go to bed with satisfaction.',
	'Little things make big days.',
	'Do something today that your future self will thank you for.',
	'It’s not whether you get knocked down, it’s whether you get up.',
	'You don’t have to be great to start, but you have to start to be great.',
	'Doubt kills more dreams than failure ever will.',
];

const getRandomMessage = () => {
	const randomIndex = Math.floor(Math.random() * messages.length);
	return messages[randomIndex];
};

const displayRandomMessages = () => {
	displayMessage.innerHTML = getRandomMessage();
};

buttonElement.addEventListener('click', () => {
	displayRandomMessages();
});
