import {Component, OnInit} from '@angular/core';
import {OpenedService} from "../../services/opened.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  openedService: OpenedService;

  constructor(openedService: OpenedService) {
    this.openedService = openedService;
  }

  ngOnInit() {}

}
