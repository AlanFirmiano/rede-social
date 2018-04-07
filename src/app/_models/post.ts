export class Post {

    id: number;
    nomePessoa: string;
    texto: string;
    qtdLikes: number;
    date: string;
    constructor(id, nomePessoa, texto, qtdLikes, date) {
        this.id = id;
        this.nomePessoa = nomePessoa;
        this.texto = texto;
        this.qtdLikes = qtdLikes;
        this.date = date;
    }
}