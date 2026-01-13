function copiarCodigo() {
    // 1. Obtenemos el texto
    const codigo = document.getElementById("codigo-html").innerText;
    
    // 2. Intentamos copiar
    navigator.clipboard.writeText(codigo).then(() => {
        const btn = document.querySelector('.boton-copiar');
        btn.innerText = '¡Copiado!';
        setTimeout(() => {
            btn.innerText = 'Copiar código';
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
        alert("Para que el botón funcione, abre el VS Code con 'Live Server'");
    });
}