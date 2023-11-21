package romson.ecf.server.web.mappers;

import org.mapstruct.Mapper;
import romson.ecf.server.domain.models.Admin;
import romson.ecf.server.domain.models.Comment;
import romain.ecf.server.web.dtos.AdminDto;

@Mapper
public interface AdminDtoMapper {
  AdminDto toDto(Admin admin);
  Admin toModel(AdminDto adminDto);
}
