import { Injectable } from '@angular/core';
import { Post } from './_models/post';

@Injectable()
export class AppService {
    idVez:number = 5;
    posts = [
        new Post(1, "Leo", "asndaskjn ajsdhakjda", 5),
        new Post(2, "Davi", "asndaskjn ajsdhakjda", 8),
        new Post(3, "Jorge", "Tô perdido demais mam", 4),
        new Post(4, "Alan", "Sucesso demais", 3),
        new Post(5, "João", "Isso é trivial", 6)
    ];

    getPosts() {
        return this.posts;
    }
    addPost(post: Post) {
        post.id = ++this.idVez;
        this.posts.push(post);
    }

    recebeuLike(post: Post) {
        this.posts[this.posts.indexOf(post)].qtdLikes++;
    }
    
    removePost(post: Post) {
        var index = this.posts.indexOf(post, 0);
        if (index > -1) {
        this.posts.splice(index, 1);
    }
    }

}