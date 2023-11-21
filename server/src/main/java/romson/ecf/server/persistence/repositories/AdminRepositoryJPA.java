package romson.ecf.server.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import romson.ecf.server.persistence.entities.AdminEty;

public interface AdminRepositoryJPA extends JpaRepository<AdminEty, Integer> {
}
