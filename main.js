const answerField = document.querySelector('.answer');
const btn = document.querySelector('.btn')

async function ConsultCep() {
    try {
        const userCep = document.querySelector('#input__cep').value;
        const searchCep = await fetch(`https://viacep.com.br/ws/${userCep}/json/`)
        const cepInfo = await searchCep.json()
        const addresHTML = 
        `
            <p>Cep: ${cepInfo.cep}</p>
            <p>Estado: ${cepInfo.uf}</p> 
            <p>Localidade: ${cepInfo.localidade}</p>
            <p>logradouro: ${cepInfo.logradouro}</p>
        `

        answerField.innerHTML = addresHTML
    } catch(error) {
        answerField.innerHTML = `<p class='error-mensage'>Ouve um erro ao consular o cep, tente novamente.</p>`
    }
}

btn.addEventListener('click', (e) => {

    e.preventDefault()
    ConsultCep()
})


