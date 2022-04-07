package br.com.recrutamento.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.recrutamento.entities.Candidato;
import br.com.recrutamento.repositories.CandidatoRepository;
@Service
public class CandidatoService {

	@Autowired
	private CandidatoRepository candidatoRepository;

	public Candidato salvar (Candidato candidato) {
		return candidatoRepository.save(candidato);
	}	

	public void excluirPeloId(Long id) {
		candidatoRepository.deleteById(id);
	}
	
	public List<Candidato> findAll() {
		return candidatoRepository.findAll();
	}

	public Optional<Candidato> findById(Long id) {
		return candidatoRepository.findById(id);
	}
	
	public void deleteCandidato(Candidato candidato) {
		candidatoRepository.delete(candidato);
	}
	
	public Candidato atualizarCandidato(Candidato candidato) {
		return candidatoRepository.save(candidato);
	}


}
