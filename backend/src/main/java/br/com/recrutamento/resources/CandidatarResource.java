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
import br.com.recrutamento.services.CandidatarService;

@RestController
@RequestMapping(value = "/candidatar")
public class CandidatarResource {
	@Autowired
	private CandidatarService candidatarService;
	
	@PostMapping("/candidatar")
	@ResponseBody
	public Candidatar salvar(@RequestBody Candidatar candidatar) {
		return candidatarService.salvar(candidatar);
	}
	@GetMapping("/listacandidatar")
	public List<Candidatar> listarCandidatar() {
		return candidatarService.findAll();
	}

	@GetMapping("/candidatar/{id}")
	public Optional<Candidatar> listarCandidatarId(@PathVariable(value = "id") long id) {
		return candidatarService.findById(id);
	}
	
	@DeleteMapping ("/candidatar")
	public void deleteCandidatar(@RequestBody Candidatar candidatar) {
		candidatarService.deleteCandidatar(candidatar);
	}
	
	@PutMapping ("/candidatar")
	public Candidatar atualizarCandidatar(@RequestBody Candidatar candidatar) {
		return candidatarService.salvar(candidatar);
	}

}
