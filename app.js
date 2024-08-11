const entradaTexto = document.querySelector(".entrada_texto");
const salidaTexto = document.querySelector(".salida_texto");

function botonEncriptar(){
    const textoEncriptado = encriptar(entradaTexto.value);
    salidaTexto.value = textoEncriptado; 
    entradaTexto.value = "";
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(entradaTexto.value);
    salidaTexto.value = textoEncriptado; 
    entradaTexto.value = "";
}

function botonCopiar(){
    const txtCopiado = copiar();
    alert("El texto se ha copiado");
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 
        return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } 
        return stringDesencriptada
}

function copiar(){
    const textoCopiado = salidaTexto;
    textoCopiado.select();
    document.execCommand("copy");
    salidaTexto.value = "";
}


