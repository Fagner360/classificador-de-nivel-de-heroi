//Classificador de nivel de heroi

//Variavel que armazena o nome e a quantidade de experiencia (xp) do herói
let nomeDoHeroi = "gaspar";
let xp = 7000;
let nivel;

//estrutura de decisao para mostrar a mensagem  com base na quantidade de xp do heroi
if(xp < 1000){
    nivel = "é nivel ferro";
}else if (xp >= 1001 && xp <= 2000){
    nivel = "é nivel bronze";
}else if(xp >= 2001 && xp <= 5000){
    nivel = "é nivel prata";
}else if(xp >= 5001 && xp <= 7000){
    nivel = "nivel de ouro";
}else if(xp >= 7001 && xp <= 8000){
    nivel = "é nivel platina";
}else if(xp >= 8001 && xp <= 9000){
    nivel = "é nivel ascendente";
}else if(xp >= 9001 && xp <= 10000){
    nivel = "é nivel imortal";
}else if(xp <= 10001){
    nivel = "é nivel radiante";
}
    
//saida
console.log(`o heroi de nome ${nomeDoHeroi} está no ${nivel}`);
console.log(`parabens ${nomeDoHeroi} pela sua conquista`);



