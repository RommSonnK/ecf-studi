package romson.ecf.server.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import romson.ecf.server.persistence.entities.CommentEty;

public interface CommentRepositoryJPA extends JpaRepository<CommentEty, Integer> {
}
