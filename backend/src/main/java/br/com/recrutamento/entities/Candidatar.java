package br.com.recrutamento.entities;
import java.io.Serializable;
import java.util.*;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Getter
@Setter
@Entity
public class Candidatar implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Date data;
	
	@OneToOne 
	@JoinColumn (name = "candidato_id")
	private Candidato candidato;
	
	@OneToOne 
	@JoinColumn (name = "vaga_id")
	private Vaga vaga;
	

}
