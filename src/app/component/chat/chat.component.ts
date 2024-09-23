import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PubComponent } from '../pub/pub.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [PostComponent, PubComponent, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}
