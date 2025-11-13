import { PhonePipe } from '../../pipes/phone.pipe';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { User } from '../../interfaces/user.interface';
import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { heroArchiveBox, heroArrowLeft, heroArrowTopRightOnSquare, heroNumberedList, heroPencilSquare } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-user-area',
  standalone: true,
  imports: [NgIcon, RouterLink, PhonePipe, RouterOutlet],
  viewProviders: [provideIcons({ heroArrowLeft, heroArrowTopRightOnSquare, heroNumberedList, heroArchiveBox, heroPencilSquare })],
  templateUrl: './user-area.component.html',
  styleUrl: './user-area.component.css'
})
export class UserAreaComponent {
  user !: User;
  private readonly _usersService = inject(UsersService);

  @Input() set userId(id: number) {
    this._usersService.getUserById(id).subscribe(user => {
      this.user = user;
    });
  }
}
