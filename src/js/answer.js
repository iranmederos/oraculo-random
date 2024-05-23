window.onload = () => {
    const title = document.querySelector('.title');
    const answer = document.querySelector('.answer');
    const chapter = getParameterByName("chapter");

    if (chapter) {
        if (oraculo && chapter >= 0 && chapter < oraculo.length) {
            const chapterData = oraculo[parseInt(chapter)];
            title.innerHTML = chapterData.titulo;
            answer.innerHTML = chapterData.texto;
        } else {
            console.error('Invalid chapter or missing oraculo data');
        }
    }

    function getParameterByName(name) {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        return urlParams.get(name);
    }
}