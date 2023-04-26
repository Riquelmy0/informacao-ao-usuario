const meuArray = []


function getValue(dadosDoInput){

    meuArray.push(dadosDoInput)
    console.log(meuArray)
    
    setInterval(() => {
        sumirMng()
    }, 8500);
    
    mostrarMng()
}

function mostrarMng(){
    const div = document.getElementById('submit-ok');
    div.style.display = 'flex'
}

function sumirMng(){
    const div = document.getElementById('submit-ok');
    div.style.display = 'none';
}



function meInput(){
    const email = document.getElementById('email').value
    console.log(email)
    getValue(email)
}