import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { User } from '../../interfaces/user.interface';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { heroArrowDown, heroArrowUp } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgIcon],
  viewProviders: [provideIcons({ heroArrowDown, heroArrowUp })],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  reachedEnd: boolean = false;
  users$: Observable<User[]> = this._usersService.getUsers();

  constructor(private _usersService: UsersService) { }

  scroll(element: HTMLElement, reachedEnd: boolean) {
    if (reachedEnd) {
      element.scrollBy({
        top: element.scrollHeight * -1,
        behavior: 'smooth'
      });
      this.reachedEnd = false;
    } else {
      element.scrollBy({
        top: element.scrollHeight,
        behavior: 'smooth'
      });
      this.reachedEnd = true;
    }
  }

}
