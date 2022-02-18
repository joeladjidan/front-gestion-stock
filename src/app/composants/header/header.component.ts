import {Component, OnInit,} from '@angular/core';

import {Observable,} from 'rxjs';
import {UserService} from 'src/app/services/user/user.service';
import {UtilisateurDto} from '../../../gs-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;       

  connectedUser: UtilisateurDto = {};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.connectedUser = this.userService.getConnectedUser();
    this.isLoggedIn$ = this.userService.isLoggedIn;
  }

  onLogout(){
    this.userService.logout();
  }

}

