package romson.ecf.server.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import romson.ecf.server.persistence.entities.VehicleEty;

public interface VehicleRepositoryJPA extends JpaRepository<VehicleEty, Integer> {
}
