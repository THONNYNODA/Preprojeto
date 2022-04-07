package br.com.recrutamento.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.recrutamento.entities.Candidato;
@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Long> {

}
