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

import br.com.recrutamento.entities.Escolaridade;
import br.com.recrutamento.repositories.EscolaridadeRepository;

@RestController
@RequestMapping(value = "/escolaridade")
public class EscolaridadeResource {

	@Autowired
	private EscolaridadeRepository escolaridadeRepository;

	@PostMapping("/escolaridade")
	@ResponseBody
	public Escolaridade salvar(@RequestBody Escolaridade escolaridade) {
		return escolaridadeRepository.save(escolaridade);
	}

	@GetMapping("/escolaridades")
	public List<Escolaridade> listarEscolaridader() {
		return escolaridadeRepository.findAll();
	}

	@GetMapping("/escolaridade/{id}")
	public Optional<Escolaridade> listarEscolaridadeId(@PathVariable(value = "id") long id) {
		return escolaridadeRepository.findById(id);
	}
	
	@DeleteMapping ("/escolaridade")
	public void deleteEscolaridade(@RequestBody Escolaridade escolaridade) {
		escolaridadeRepository.delete(escolaridade);
	}
	
	@PutMapping ("/escolaridade")
	public Escolaridade atualizarEscolaridade(@RequestBody Escolaridade escolaridade) {
		return escolaridadeRepository.save(escolaridade);
	}

}
