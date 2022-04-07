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

import br.com.recrutamento.entities.Vaga;
import br.com.recrutamento.repositories.VagaRepository;
import br.com.recrutamento.services.VagaService;

@RestController
@RequestMapping(value = "/vaga")
public class VagaResource {

	@Autowired
	private VagaService vagaService;

	@PostMapping("/vaga")
	@ResponseBody
	public Vaga salvar(@RequestBody Vaga vaga) {
		return vagaService.salvar(vaga);
	}

	@GetMapping("/vagas")
	public List<Vaga> listarVagar() {
		return vagaService.findAll();
	}

	@GetMapping("/vaga/{id}")
	public Optional<Vaga> listarVagaId(@PathVariable(value = "id") long id) {
		return vagaService.findById(id);
	}
	
	@DeleteMapping ("/vaga")
	public void deleteVaga(@RequestBody Vaga vaga) {
		vagaService.deleteVaga(vaga);
	}
	
	@PutMapping ("/vaga")
	public Vaga atualizarVaga(@RequestBody Vaga vaga) {
		return atualizarVaga(vaga);
	}

}
