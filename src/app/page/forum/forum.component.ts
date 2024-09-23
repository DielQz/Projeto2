import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../component/sidenav/sidenav.component';
import { ChatComponent } from '../../component/chat/chat.component';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [SidenavComponent, ChatComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent implements OnInit{
  ngOnInit(): void {
    console.log('forum carregado')
  }
}
