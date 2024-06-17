const userCep = document.querySelector('#input__cep')
const answerField = document.querySelector('.answer');
const btn = document.querySelector('.btn')

async function ConsultCep(cep) {
    try {
        const searchCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const cepInfo = await searchCep.json()

        answerField.innerHTML = 
        `
            <p>Cep: ${cepInfo.cep}</p>
            <p>Estado: ${cepInfo.uf}</p> 
            <p>Localidade: ${cepInfo.localidade}</p>
            <p>logradouro: ${cepInfo.logradouro}</p>
        `
    } catch(error) {
        answerField.innerHTML += `<p class='error-mensage'>Ouve um erro ao consular o cep, tente novamente.</p>`
    }
}


ConsultCep("01001000")


