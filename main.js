//const userCep = document.querySelector('#input__cep').value;
const answerField = document.querySelector('.answer');
//const btn = document.querySelector('.btn')

async function ConsultCep(cep) {
    try {
        const searchCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const cepInfo = await searchCep.json()

        return cepInfo
    } catch(error) {
        answerField += `Ouve um erro ao consular o cep, tente novamente.`
    }
}