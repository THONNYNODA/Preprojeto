package br.com.recrutamento.entities;
import java.io.Serializable;
import java.util.*;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Getter
@Setter
@Entity
public class Vaga implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String descricao;
	private String horasSemanais;
	private String diasSemana;
	private String turnoTrabalho;
	private String remuneracao;
	private String endereco;
	private String requisitos;
	private String regime;
	private String status;
	
	@JsonIgnore
	@OneToMany (mappedBy = "vaga")
	private List<Vaga> vaga = new ArrayList();



}
