package romson.ecf.server.web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import romain.ecf.server.web.apis.AdminApi;
import romain.ecf.server.web.dtos.AdminDto;
import romson.ecf.server.domain.models.Admin;
import romson.ecf.server.persistence.repositories.AdminRepository;
import romson.ecf.server.persistence.repositories.CommentRepository;
import romson.ecf.server.web.mappers.AdminDtoMapper;
import romson.ecf.server.web.mappers.CommentDtoMapper;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:8100")
public class EcfServerAdminController implements AdminApi {

  private final AdminRepository adminRepository;
  private final AdminDtoMapper mapper;
  @Override
  public ResponseEntity<List<AdminDto>> listAdmin() {
    return ResponseEntity.ok(adminRepository.findAll().stream()
      .map(mapper::toDto).collect(Collectors.toList()));
  }

  @Override
  public ResponseEntity<Void> saveAdmin(AdminDto admin) {
    return adminRepository.save(mapper.toModel(admin)) != null ? ResponseEntity.ok().build() : ResponseEntity.badRequest().build();
  }
}
