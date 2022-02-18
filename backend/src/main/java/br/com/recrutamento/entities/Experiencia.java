package br.com.recrutamento.entities;
import java.io.Serializable;
import java.util.*;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@Entity
public class Experiencia implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String empresa;
	private String cargo;
	private Date admissão;
	private Date demissão;
	private String atividadesDesenvolvidas;
	
	@OneToOne 
	@JoinColumn (name = "candidato_id")
	private Candidato candidato;	
	
	@JsonIgnore
	@OneToMany (mappedBy = "experiencia")
	private List<Experiencia> experiencia = new ArrayList();
	
}
