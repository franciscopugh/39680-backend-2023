const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";
/*
addEventListener('click',() => {

})

//function calcularImpuestos(IVA(), PAIS(),RETENCION() )

array.forEach(element => {
    
});
*/
const consultarDolar = async () => {
    const promise = await fetch('https://criptoya.com/api/dolar')
    const dolar = await promise.json()
    return dolar
}

/*
const datos = fetch('https://criptoya.com/api/dolar')
.then(response => response.json())
.then(({oficial, solidario, blue, mep}) => {
    //const {oficial, solidario, blue, mep} = dolar
    console.log(oficial, solidario, blue,mep)
    
})
.finally(() => {
    return true
})*/

consultarDolar().then(dolar => console.log(dolar))

