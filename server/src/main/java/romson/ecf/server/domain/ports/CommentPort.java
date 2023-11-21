package romson.ecf.server.domain.ports;

import romson.ecf.server.domain.models.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentPort {
  List<Comment> findAll();
  Comment save(Comment comment);
}
