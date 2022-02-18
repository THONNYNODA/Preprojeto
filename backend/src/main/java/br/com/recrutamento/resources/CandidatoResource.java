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

import br.com.recrutamento.entities.Candidato;
import br.com.recrutamento.repositories.CandidatoRepository;

@RestController
@RequestMapping(value = "/candidato")
public class CandidatoResource {

	@Autowired
	private CandidatoRepository candidatoRepository;

	@PostMapping("/candidato")
	@ResponseBody
	public Candidato salvar(@RequestBody Candidato candidato) {
		return candidatoRepository.save(candidato);
	}

	@GetMapping("/candidatos")
	public List<Candidato> listarCandidator() {
		return candidatoRepository.findAll();
	}

	@GetMapping("/candidato/{id}")
	public Optional<Candidato> listarCandidatoId(@PathVariable(value = "id") long id) {
		return candidatoRepository.findById(id);
	}
	
	@DeleteMapping ("/candidato")
	public void deleteCandidato(@RequestBody Candidato candidato) {
		candidatoRepository.delete(candidato);
	}
	
	@PutMapping ("/candidato")
	public Candidato atualizarCandidato(@RequestBody Candidato candidato) {
		return candidatoRepository.save(candidato);
	}

}
