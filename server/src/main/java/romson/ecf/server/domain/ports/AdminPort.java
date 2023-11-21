package romson.ecf.server.domain.ports;

import romson.ecf.server.domain.models.Admin;
import romson.ecf.server.domain.models.Vehicle;

import java.util.List;

public interface AdminPort {
  List<Admin> findAll();
  Admin save(Admin admin);
}
