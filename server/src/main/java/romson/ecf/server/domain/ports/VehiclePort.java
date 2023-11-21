package romson.ecf.server.domain.ports;

import romson.ecf.server.domain.models.Vehicle;

import java.util.List;
import java.util.Optional;

public interface VehiclePort {
  List<Vehicle> findAll();
  Vehicle save(Vehicle vehicle);
}
