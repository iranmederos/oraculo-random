window.addEventListener('DOMContentLoaded', () => {
    const CIRCLE_SIZE = 50;
    const MARGIN = 10;

    // Show question echo
    const echoEl = document.getElementById('question-echo');
    const question = sessionStorage.getItem('question');
    if (question && echoEl) {
        echoEl.textContent = `“${question}”`;
    }

    function createCircle(x, y, url, index) {
        const link = document.createElement('a');
        const circle = document.createElement('div');
        link.href = url;
        link.className = 'circle-link';
        link.style.left = `${x}px`;
        link.style.top = `${y}px`;
        link.setAttribute('aria-label', `Círculo ${index + 1}`);
        circle.classList.add('circle');
        link.appendChild(circle);
        document.body.appendChild(link);
    }

    function getRandomPosition() {
        const maxX = window.innerWidth  - CIRCLE_SIZE - MARGIN;
        const maxY = window.innerHeight - CIRCLE_SIZE - MARGIN;
        const x = MARGIN + Math.random() * maxX;
        const y = MARGIN + Math.random() * maxY;
        return { x, y };
    }

    function generateCircles() {
        for (let i = 0; i < 36; i++) {
            const { x, y } = getRandomPosition();
            createCircle(x, y, `answer.html?chapter=${i}`, i);
        }
    }

    generateCircles();
});