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
import br.com.recrutamento.services.ExperienciaService;

@RestController
@RequestMapping(value = "/experiencia")
public class ExperienciaResource {

	@Autowired
	private ExperienciaService experienciaService;

	@PostMapping("/experiencia")
	@ResponseBody
	public Experiencia salvar(@RequestBody Experiencia experiencia) {
		return experienciaService.salvar(experiencia);
	}

	@GetMapping("/experiencias")
	public List<Experiencia> listarExperienciar() {
		return experienciaService.findAll();
	}

	@GetMapping("/experiencia/{id}")
	public Optional<Experiencia> listarExperienciaId(@PathVariable(value = "id") long id) {
		return experienciaService.findById(id);
	}
	
	@DeleteMapping ("/experiencia")
	public void deleteExperiencia(@RequestBody Experiencia experiencia) {
		experienciaService.deleteExperiencia(experiencia);
	}
	
	@PutMapping ("/experiencia")
	public Experiencia atualizarExperiencia(@RequestBody Experiencia experiencia) {
		return experienciaService.atualizarExperiencia(experiencia);
	}

}
