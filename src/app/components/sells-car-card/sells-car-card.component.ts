import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sells-car-card',
  templateUrl: './sells-car-card.component.html',
  styleUrls: ['./sells-car-card.component.scss'],
})
export class SellsCarCardComponent  implements OnInit {

  @Input()
  photo: string = "";

  @Input()
  description: string = "";

  @Input()
  years: number = 0;

  @Input()
  kilometer: number = 0;

  @Input()
  price: number = 0;


  isContactOpen = false;

  constructor() { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isContactOpen = isOpen;
  }

}
