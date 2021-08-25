let welcome = document.getElementById('welcome')
let btnInscription = document.getElementById('inscriptionValid')

welcome.onmouseover = () => {
    welcome.innerHTML = 'Bienvenue'
}
welcome.onmouseleave = () => {
    welcome.innerHTML = 'ようこそ'
}




btnInscription.onclick = () => {
    alert('おめでとう　Vous êtes inscrit')
}



