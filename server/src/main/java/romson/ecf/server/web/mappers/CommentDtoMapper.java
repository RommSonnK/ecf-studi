package romson.ecf.server.web.mappers;

import org.mapstruct.Mapper;
import romain.ecf.server.web.dtos.CommentairesDto;
import romson.ecf.server.domain.models.Comment;

@Mapper
public interface CommentDtoMapper {
  CommentairesDto toDto(Comment comment);
}
