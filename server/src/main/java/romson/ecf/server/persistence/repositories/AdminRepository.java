package romson.ecf.server.persistence.repositories;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import romson.ecf.server.domain.models.Admin;
import romson.ecf.server.domain.models.Comment;
import romson.ecf.server.domain.ports.AdminPort;
import romson.ecf.server.domain.ports.CommentPort;
import romson.ecf.server.persistence.mappers.AdminEtyMapper;
import romson.ecf.server.persistence.mappers.CommentEtyMapper;

import java.util.List;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor
public class AdminRepository implements AdminPort {
  private final AdminRepositoryJPA adminRepository;
  private final AdminEtyMapper mapper;

  @Override
  public List<Admin> findAll() {
    return adminRepository.findAll().stream().map(mapper::toModel).collect(Collectors.toList());
  }

  @Override
  public Admin save(Admin admin) {
    adminRepository.save(mapper.toEty(admin));
    return admin;
  }
}
