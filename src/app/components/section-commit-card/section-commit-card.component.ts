import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-commit-card',
  templateUrl: './section-commit-card.component.html',
  styleUrls: ['./section-commit-card.component.scss'],
})
export class SectionCommitCardComponent  implements OnInit {

  @Input()
  user: string = "";

  @Input()
  avis: string = "";

  @Input()
  note: number = 0;

  constructor() { }

  ngOnInit() {}

}
