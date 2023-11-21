import {Component, OnInit} from '@angular/core';
import {Comment} from "../../models/comment";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-section-commit',
  templateUrl: './section-commit.component.html',
  styleUrls: ['./section-commit.component.scss'],
})
export class SectionCommitComponent  implements OnInit {

  comments: Comment[] = []

  constructor(commentService: CommentService) {
    commentService.getCommentList().subscribe((data) => {
      console.log(data);
      this.comments = data;
    });
  }

  ngOnInit() {}

}
