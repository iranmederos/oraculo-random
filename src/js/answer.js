const title = document.querySelector('.title');
const answer = document.querySelector('.answer');
const chapter = getParameterByName("chapter");

if (chapter) {
    // Check if oraculo exists and if chapter is within its bounds
    if (oraculo && chapter >= 0 && chapter < oraculo.length) {
        const chapterData = oraculo[parseInt(chapter)];
        title.innerHTML = chapterData.titulo;
        answer.innerHTML = chapterData.texto;
    } else {
        // Handle invalid chapter or missing oraculo data
        console.error('Invalid chapter or missing oraculo data');
        // You can also display an error message to the user here
    }
}


function getParameterByName(name) {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    return urlParams.get(name);
}