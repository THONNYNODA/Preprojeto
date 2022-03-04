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

import br.com.recrutamento.entities.Escolaridade;
import br.com.recrutamento.repositories.EscolaridadeRepository;
@Service
public class EscolaridadeService {

	@Autowired
	private EscolaridadeRepository vagaRepository;

	public Escolaridade salvar(Escolaridade escolaridade) {
		return vagaRepository.save(escolaridade);
	}	

	public void excluirPeloId(Long id) {
		vagaRepository.deleteById(id);
	}
	
	public List<Escolaridade> findAll() {
		return vagaRepository.findAll();
	}

	public Optional<Escolaridade> findById(Long id) {
		return vagaRepository.findById(id);
	}
	
	public void deleteEscolaridade(Escolaridade vaga) {
		vagaRepository.delete(vaga);
	}
	
	public Escolaridade atualizarEscolaridade(Escolaridade vaga) {
		return vagaRepository.save(vaga);
	}


}
