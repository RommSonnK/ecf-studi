import { Component, OnInit } from '@angular/core';
import {Comment} from "../../models/comment";

@Component({
  selector: 'app-section-commit',
  templateUrl: './section-commit.component.html',
  styleUrls: ['./section-commit.component.scss'],
})
export class SectionCommitComponent  implements OnInit {

  comments: Comment[] = [
    {
      user: "Romson",
      avis: "Service entretiens, réparations et mise en en route",
      note: 3
    },
    {
      user: "Garou",
      avis: "Service entretiens, réparations et mise en en route",
      note: 4
    },
    {
      user: "Jason",
      avis: "Service entretiens, réparations et mise en en route",
      note: 3
    },
    {
      user: "Gerard",
      avis: "Service entretiens, réparations et mise en en route",
      note: 2
    },
    {
      user: "Magalie",
      avis: "Service entretiens, réparations et mise en en route",
      note: 5
    },
    {
      user: "Michael",
      avis: "Service entretiens, réparations et mise en en route",
      note: 1
    },
    {
      user: "Dimitri",
      avis: "Service entretiens, réparations et mise en en route",
      note: 1
    }
  ]

  constructor() { }

  ngOnInit() {}

}
