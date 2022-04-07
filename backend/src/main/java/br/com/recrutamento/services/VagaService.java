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

import br.com.recrutamento.entities.Vaga;
import br.com.recrutamento.repositories.VagaRepository;
@Service
public class VagaService {

	@Autowired
	private VagaRepository vagaRepository;

	public Vaga salvar(Vaga vaga) {
		return vagaRepository.save(vaga);
	}	

	public void excluirPeloId(Long id) {
		vagaRepository.deleteById(id);
	}
	
	public List<Vaga> findAll() {
		return vagaRepository.findAll();
	}

	public Optional<Vaga> findById(Long id) {
		return vagaRepository.findById(id);
	}
	
	public void deleteVaga(Vaga vaga) {
		vagaRepository.delete(vaga);
	}
	
	public Vaga atualizarVaga(Vaga vaga) {
		return vagaRepository.save(vaga);
	}


}
