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
public class Candidato implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;	
	private String nome;
	private Date dataNascimento;
	private String estadoCivil;
	private String nacionalidade;
	private String genero;
	private String nomeSocial;
	private String logradouro;
	private String cep;
	private String bairro;
	private String complemento;
	private String estado;
	private String cidade;
	private String emailString;
	private String celular;
	private String cpf;
	private String rg;
	private String instagram;
	private String facebook;
	private String senha;
	private String confirmacaoSenha;
	

	@JsonIgnore
	@OneToMany (mappedBy = "candidato")
	private List<Candidato> candidato = new ArrayList();	
}
