window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.button');
    const field = document.querySelector('#text_field');

    btn.addEventListener('click', () => {
        const text = field.value;
        if (!text || text.length < 5) {
            alert('Debes ingresar una pregunta de al menos 5 caracteres.');
            field.focus();
        } else {
            sessionStorage.setItem('question', text);
            window.location.href = 'choice_view.html';
        }
    });

    field.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') btn.click();
    });
});