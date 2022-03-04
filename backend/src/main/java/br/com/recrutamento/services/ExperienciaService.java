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

import br.com.recrutamento.entities.Experiencia;
import br.com.recrutamento.repositories.ExperienciaRepository;
@Service
public class ExperienciaService {

	@Autowired
	private ExperienciaRepository experienciaRepository;

	public Experiencia salvar(Experiencia experiencia) {
		return experienciaRepository.save(experiencia);
	}	

	public void excluirPeloId(Long id) {
		experienciaRepository.deleteById(id);
	}
	
	public List<Experiencia> findAll() {
		return experienciaRepository.findAll();
	}

	public Optional<Experiencia> findById(Long id) {
		return experienciaRepository.findById(id);
	}
	
	public void deleteExperiencia(Experiencia experiencia) {
		experienciaRepository.delete(experiencia);
	}
	
	public Experiencia atualizarExperiencia(Experiencia experiencia) {
		return experienciaRepository.save(experiencia);
	}


}
