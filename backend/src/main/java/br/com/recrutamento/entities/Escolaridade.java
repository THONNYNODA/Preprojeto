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
public class Escolaridade implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String curso;
	private String nomeInstituição;
	private Date dataInicial;
	private Date dataFinal;
	
	@OneToOne 
	@JoinColumn (name = "candidato_id")
	private Candidato candidato;	
	

	@JsonIgnore
	@OneToMany (mappedBy = "escolaridade")
	private List<Escolaridade> escolaridade = new ArrayList();
	
}
