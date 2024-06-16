const userCep = document.querySelector('#input__cep')
const answerField = document.querySelector('.answer');
const btn = document.querySelector('.btn')

async function ConsultCep(cep) {
    try {
        const searchCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        return await searchCep.json()
    } catch(error) {
        answerField.innerHTML += `<p class='error-mensage'>Ouve um erro ao consular o cep, tente novamente.</p>`
    }
}


const cepInfo = ConsultCep("01001000")

cepInfoLogradouro = cepInfo.logradouro;
console.log(cepInfoLogradouro)
