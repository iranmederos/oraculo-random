window.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('chapter-title');
    const answer = document.getElementById('chapter-answer');
    const echoEl = document.getElementById('question-echo');

    // Show question echo
    const question = sessionStorage.getItem('question');
    if (question && echoEl) {
        echoEl.textContent = `“${question}”`;
    }

    // Render chapter
    const urlParams = new URLSearchParams(window.location.search);
    const chapterIndex = parseInt(urlParams.get('chapter'), 10);

    if (!isNaN(chapterIndex) && oraculo && chapterIndex >= 0 && chapterIndex < oraculo.length) {
        const chapterData = oraculo[chapterIndex];
        title.textContent = chapterData.titulo;
        answer.textContent = chapterData.texto;
    } else {
        console.error('Invalid chapter or missing oraculo data');
    }
});