import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit{

  nick: string = '';
  trilhaSelecionada: string = '';

  constructor(private router:Router) {}

  ngOnInit() {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo);
      this.nick = userInfo.nickname || '';
      this.trilhaSelecionada = userInfo.trilha || '';
    }
    console.log(this.nick);
    console.log(this.trilhaSelecionada);
  }

  entrar() {
    const userInfo = {
      nickname: this.nick,
      trilha: this.trilhaSelecionada
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    console.log('Informações do usuário armazenadas:', userInfo);

    this.router.navigate(['/forum']);
  }


}
