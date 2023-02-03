

let  btSearch = document.querySelector('#searchCep')



function consultaCep(){

    let result = document.querySelector('#resultCep')
    let cepNumber = document.querySelector('#cep').value

   if(cepNumber.length < 8 ){
        result.innerHTML = "Digite o CEP corretamente"
    }


    let linkjson = `https://viacep.com.br/ws/${cepNumber}/json/`

    fetch(linkjson)
    .then(function(response) {
        response.json()
        .then(function(data) {
            showCep(data)
        })
    })
}

function showCep(dados){

    let result = document.querySelector('#resultCep')

    result.innerHTML = 
    `<p>Bairro: ${dados.bairro}</p>
      <p>Localidade: ${dados.localidade}</p>
      <p>UF: ${dados.uf}</p>
      <p>DDD: ${dados.ddd}</p>
      
      `
    if(dados.erro) {
        result.innerHTML = "CEP não encontrado"
    }

}

btSearch.addEventListener('click', consultaCep, showCep)

