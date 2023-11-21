package romson.ecf.server.persistence.repositories;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import romson.ecf.server.domain.models.Comment;
import romson.ecf.server.domain.ports.CommentPort;
import romson.ecf.server.persistence.mappers.CommentEtyMapper;
import romson.ecf.server.persistence.mappers.VehicleEtyMapper;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor
public class CommentRepository implements CommentPort {
  private final CommentRepositoryJPA commentRepository;
  private final CommentEtyMapper mapper;

  @Override
  public List<Comment> findAll() {
    return commentRepository.findAll().stream().map(mapper::toModel).collect(Collectors.toList());
  }

  @Override
  public Comment save(Comment comment) {
    return null;
  }
}
