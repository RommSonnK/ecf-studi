package romson.ecf.server.persistence.mappers;

import org.mapstruct.Mapper;
import romson.ecf.server.domain.models.Admin;
import romson.ecf.server.domain.models.Vehicle;
import romson.ecf.server.persistence.entities.AdminEty;
import romson.ecf.server.persistence.entities.VehicleEty;

@Mapper(componentModel = "spring")
public interface AdminEtyMapper {
    AdminEty toEty(Admin admin);
    Admin toModel(AdminEty ety);
}
