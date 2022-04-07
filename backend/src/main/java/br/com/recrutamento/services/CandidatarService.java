package br.com.recrutamento.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.recrutamento.entities.Candidatar;
import br.com.recrutamento.repositories.CandidatarRepository;
@Service
@Transactional
public class CandidatarService {

	@Autowired
	private CandidatarRepository candidatarRepository;

	public Candidatar salvar(Candidatar candidatar) {
		return candidatarRepository.save(candidatar);
	}	

	public void excluirPeloId(Long id) {
		candidatarRepository.deleteById(id);
	}
	
	public List<Candidatar> findAll() {
		return candidatarRepository.findAll();
	}

	public Optional<Candidatar> findById (Long id) {
		return candidatarRepository.findById(id);
	}
	
	public Optional<Candidatar> listarCandidatarId(Long id) {
		return candidatarRepository.findById(id);
	}
	
	public void deleteCandidatar(Candidatar candidatar) {
		candidatarRepository.delete(candidatar);
	}
	
	public Candidatar atualizarCandidatar(Candidatar candidatar) {
		return candidatarRepository.save(candidatar);
	}


}
