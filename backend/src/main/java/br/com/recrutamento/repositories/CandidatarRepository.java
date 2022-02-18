package br.com.recrutamento.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.recrutamento.entities.Candidatar;
@Repository
public interface CandidatarRepository extends JpaRepository<Candidatar, Long> {

}
