package br.com.recrutamento.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.recrutamento.entities.Vaga;

@Repository
public interface VagaRepository extends JpaRepository<Vaga, Long> {

}