package romson.ecf.server.persistence.mappers;

import org.mapstruct.Mapper;
import romson.ecf.server.domain.models.Comment;
import romson.ecf.server.domain.models.Vehicle;
import romson.ecf.server.persistence.entities.CommentEty;
import romson.ecf.server.persistence.entities.VehicleEty;

@Mapper(componentModel = "spring")
public interface CommentEtyMapper {
    CommentEty toEty(Comment comment);
    Comment toModel(CommentEty ety);
}
