let inputCode = document.getElementById('inputCode')
let btnEncode = document.getElementById('btnEncode')
let btnEncrypt = document.getElementById('btnEncrypt')


let code = document.getElementById('code')

btnEncode.onclick = function() {
    let data = inputCode.value
    data = btoa(data)
    code.value = data
}

btnEncrypt.onclick = function() {
    let data = code.value
    data = encryptData(data)
    code.value = data
}

function encryptData(rawData){
    return rawData.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}