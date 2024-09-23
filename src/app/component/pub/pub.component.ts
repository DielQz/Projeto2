import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-pub',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule],
  templateUrl: './pub.component.html',
  styleUrl: './pub.component.css'
})
export class PubComponent implements OnInit {


  submit = {

    nick: '',
    trilha: '',
    coment: ''

  }

  ngOnInit(): void {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo);
      this.submit.nick = userInfo.nickname || '';
      this.submit.trilha = userInfo.trilha || '';
    }
    console.log(this.submit);

  }

  comentar(): void {
    console.log(this.submit);

    this.createPost().then(() => {
      this.submit.coment = "";
    })

  }

  async  createPost() {
    try {
      const response = await fetch('http://localhost:3000/Angular', {
        method: 'POST', // Método POST
        headers: {
          'Content-Type': 'application/json', // Definir o tipo de conteúdo como JSON
        },
        body: JSON.stringify(this.submit), // Converte o objeto em JSON para envio
      });

      if (!response.ok) {
        throw new Error('Erro ao criar o post');
      }

      const createdPost = await response.json(); // Resposta do servidor com o novo post criado
      console.log('Post criado com sucesso:', createdPost);
      return createdPost;
    } catch (error) {
      console.error('Erro:', error);
      return null;
    }
  }
}
