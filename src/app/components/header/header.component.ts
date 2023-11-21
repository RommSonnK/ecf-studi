import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {Admin} from "../../models/admin";
import {IonModal} from "@ionic/angular";
import {OpenedService} from "../../services/opened.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  isLoggedIn = false;
  admins: Admin[] = [];
  maxId: number = 0;

  mail: string | undefined;
  mdp: string | undefined;


  @ViewChild(IonModal)
  modal: IonModal | undefined;

  adminService: AdminService;
  openedService: OpenedService;

  constructor(adminService: AdminService, openedService: OpenedService) {
    this.adminService = adminService;
    this.openedService = openedService;
  }

  ngOnInit() {}

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
    console.log(this.isLoggedIn);
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel').then();
  }

  connect() {
    this.adminService.getAdminList().subscribe((data) => {
      console.log(data);
      this.admins = data;
    });
    this.admins.forEach((admin) => {
      if (admin.id > this.maxId)
        this.maxId = admin.id;
      if (this.mail == admin.mail && this.mdp == admin.mdp)
        this.setIsLoggedIn(true);
    })
    this.setIsLoggedIn(true);
  }
}
