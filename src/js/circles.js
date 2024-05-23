window.onload = () => {
    function createCircle(x, y, url) {
        const circle = document.createElement('a');
        const container = document.createElement('div');
        circle.href = url;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        container.classList.add('circle');
        circle.appendChild(container);
        document.body.appendChild(circle);
    }

    function getRamdomPosition() {
        const x = Math.random() * (window.innerWidth - 20);
        const y = Math.random() * (window.innerHeight - 20);
        return {x, y};
    }

    function generateCircles() {
        for (let i = 0; i < 36; i++) {
            const {x, y} = getRamdomPosition();
            createCircle(x, y, `answer.html?chapter=${i}`);
        }
    }

    generateCircles()
}