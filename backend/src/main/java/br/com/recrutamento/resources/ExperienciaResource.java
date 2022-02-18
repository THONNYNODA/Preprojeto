package br.com.recrutamento.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.recrutamento.entities.Experiencia;
import br.com.recrutamento.repositories.ExperienciaRepository;

@RestController
@RequestMapping(value = "/experiencia")
public class ExperienciaResource {

	@Autowired
	private ExperienciaRepository experienciaRepository;

	@PostMapping("/experiencia")
	@ResponseBody
	public Experiencia salvar(@RequestBody Experiencia experiencia) {
		return experienciaRepository.save(experiencia);
	}

	@GetMapping("/experiencias")
	public List<Experiencia> listarExperienciar() {
		return experienciaRepository.findAll();
	}

	@GetMapping("/experiencia/{id}")
	public Optional<Experiencia> listarExperienciaId(@PathVariable(value = "id") long id) {
		return experienciaRepository.findById(id);
	}
	
	@DeleteMapping ("/experiencia")
	public void deleteExperiencia(@RequestBody Experiencia experiencia) {
		experienciaRepository.delete(experiencia);
	}
	
	@PutMapping ("/experiencia")
	public Experiencia atualizarExperiencia(@RequestBody Experiencia experiencia) {
		return experienciaRepository.save(experiencia);
	}

}
