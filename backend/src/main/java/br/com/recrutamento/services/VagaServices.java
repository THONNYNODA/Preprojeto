package br.com.recrutamento.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.recrutamento.entities.Vaga;
import br.com.recrutamento.repositories.VagaRepository;

@Service
public class VagaServices {
	
	@Autowired
	private VagaRepository vagaRepository;
	
	

}
