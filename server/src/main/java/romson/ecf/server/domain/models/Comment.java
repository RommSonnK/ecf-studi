package romson.ecf.server.domain.models;

import lombok.Data;

@Data
public class Comment {
  private Integer id;
  private String nom;
  private String commentaireText;
  private String note;
}
