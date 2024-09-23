import { NgFor } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  posts: [{ nick: string; trilha: string; coment: string; }] = [
    {
      nick: 'adiel',
      trilha: 'FullStack',
      coment: 'lorem lorem lorem lorem lorem lorem'
    }
  ];

  ngOnInit(): void {

  setInterval(() => {
    this.fetchPosts().then(posts => {
      this.posts = posts;
    })
  }, 5000);

  }

  async fetchPosts() {
    try {
      const response = await fetch('http://localhost:3000/Angular');
      if (!response.ok) {
        throw new Error('Erro ao buscar os posts');
      }
      const posts = await response.json();
      // console.log(posts)
      return posts;
    } catch (error) {
      console.error(error);
      return [];
    }
  }



}
