
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CardComponent } from '../card/card.component';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule, NgFor } from '@angular/common';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.css',
  standalone: true,
  imports: [MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, CardComponent, MatIconModule, CommonModule, NgFor],
})
export class SidenavComponent implements OnInit {

  chats: String[] = [
    '',
  ];

  ngOnInit(): void {

    this.fetchChats().then(chats => {
      console.log(chats)
      this.chats = chats[0].chats;
    })

  }

  async fetchChats() {
    try {
      const response = await fetch('http://localhost:3000/foruns');
      if (!response.ok) {
        throw new Error('Erro ao buscar os posts');
      }
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  showChats(): void {

    let chatsElement = document.getElementsByClassName('chats')[0];

    if (chatsElement) {
      chatsElement.classList.toggle('show-chats');
    }

    //adicionar a remoçao caso clique no elemento ou fora dele

  }

}
