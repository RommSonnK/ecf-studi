package romson.ecf.server.persistence.mappers;

import org.mapstruct.Mapper;
import romson.ecf.server.domain.models.Vehicle;
import romson.ecf.server.persistence.entities.VehicleEty;

@Mapper(componentModel = "spring")
public interface VehicleEtyMapper {
    VehicleEty toEty(Vehicle vehicle);
    Vehicle toModel(VehicleEty ety);
}
