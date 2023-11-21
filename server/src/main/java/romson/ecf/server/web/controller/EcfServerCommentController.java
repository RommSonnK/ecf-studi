package romson.ecf.server.web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import romain.ecf.server.web.apis.CommentairesApi;
import romain.ecf.server.web.dtos.CommentairesDto;
import romson.ecf.server.persistence.repositories.CommentRepository;
import romson.ecf.server.web.mappers.CommentDtoMapper;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:8100")
public class EcfServerCommentController implements CommentairesApi {

  private final CommentRepository commentRepository;
  private final CommentDtoMapper mapper;

  @Override
  public ResponseEntity<List<CommentairesDto>> listCommentaire() {
    return ResponseEntity.ok(commentRepository.findAll().stream()
      .map(mapper::toDto).collect(Collectors.toList()));
  }

  @Override
  public ResponseEntity<Void> saveCommentaire(Integer id, String nom, String note) {
    return null;
  }
}
