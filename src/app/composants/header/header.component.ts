import {
  Component,
  OnInit,
} from '@angular/core';

import { UtilisateursService } from 'src/gs-api/src/services';

import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  connectedUser: UtilisateurDto = {};

  constructor(
    private userService: UtilisateursService
  ) { }

  ngOnInit(): void {
    this.connectedUser; //= this.userService.getConnectedUser();
  }

}
