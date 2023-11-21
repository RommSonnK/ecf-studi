package romson.ecf.server.persistence.repositories;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import romson.ecf.server.domain.models.Vehicle;
import romson.ecf.server.domain.ports.CommentPort;
import romson.ecf.server.domain.ports.VehiclePort;
import romson.ecf.server.persistence.mappers.VehicleEtyMapper;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor
public class VehicleRepository implements VehiclePort {
  private final VehicleRepositoryJPA vehicleRepository;
  private final VehicleEtyMapper mapper;

  @Override
  public List<Vehicle> findAll() {
    return vehicleRepository.findAll().stream().map(mapper::toModel).collect(Collectors.toList());
  }

  @Override
  public Vehicle save(Vehicle vehicle) {
    return null;
  }
}
