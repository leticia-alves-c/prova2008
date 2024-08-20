let usuarios = {
    nome: "Marta",
    idade: "18",
    email:"martadasilva@gmail.com",
}
if(usuarios.nome==undefined||usuarios.nome == ""){
    throw new error ("nome errado")
}
if (usuarios.idade <=1) {
    throw new error ("idade inferior a 1")

}
if(usuario.email==undefined||usuarios.email==""){
    throw new error ("email errado")
}

usuarios.push(usuarios)
function listarUsuarios() {
     console.log(usuarios)
}