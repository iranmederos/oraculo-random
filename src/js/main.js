window.onload = () => {
    btn = document.querySelector('.button');
    btn.addEventListener('click', () => {
        text = document.querySelector('#text_field').value;
        if (text == null || text == '' || text.length < 5) {
            const errorMessage = 'Debes ingresar una pregunta de al menos 5 caracteres.';
            alert(errorMessage);
            text.focus();
        }
        else {
            window.location.href = `choice_view.html`;
        }
    });
}