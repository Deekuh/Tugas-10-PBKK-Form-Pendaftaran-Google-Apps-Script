const scriptURL = 'https://script.google.com/macros/s/AKfycbzKgkHogQgFNZ_fJyEB6xr__cWkcOG1A9F0SOrcqxvRhsxlt5X27mqW3QH_1dtwA817tQ/exec'

const form = document.forms['regist-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Terima kasih telah mendaftar!"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error', error.message))
})