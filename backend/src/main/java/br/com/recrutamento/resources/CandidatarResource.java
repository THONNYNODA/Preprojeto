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

import br.com.recrutamento.entities.Candidatar;
import br.com.recrutamento.repositories.CandidatarRepository;

@RestController
@RequestMapping(value = "/candidatar")
public class CandidatarResource {
	@Autowired
	private CandidatarRepository candidatarRepository;
	@PostMapping("/candidatar")
	@ResponseBody
	public Candidatar salvar(@RequestBody Candidatar candidatar) {
		return candidatarRepository.save(candidatar);
	}
	@GetMapping("/candidatars")
	public List<Candidatar> listarCandidatarr() {
		return candidatarRepository.findAll();
	}

	@GetMapping("/candidatar/{id}")
	public Optional<Candidatar> listarCandidatarId(@PathVariable(value = "id") long id) {
		return candidatarRepository.findById(id);
	}
	
	@DeleteMapping ("/candidatar")
	public void deleteCandidatar(@RequestBody Candidatar candidatar) {
		candidatarRepository.delete(candidatar);
	}
	
	@PutMapping ("/candidatar")
	public Candidatar atualizarCandidatar(@RequestBody Candidatar candidatar) {
		return candidatarRepository.save(candidatar);
	}

}
