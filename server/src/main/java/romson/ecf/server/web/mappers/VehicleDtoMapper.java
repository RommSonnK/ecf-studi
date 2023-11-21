package romson.ecf.server.web.mappers;

import org.mapstruct.Mapper;
import romain.ecf.server.web.dtos.VehiculeDto;
import romson.ecf.server.domain.models.Vehicle;

@Mapper
public interface VehicleDtoMapper {
  VehiculeDto toDto(Vehicle vehicle);
}
