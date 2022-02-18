package br.com.recrutamento.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.recrutamento.entities.Experiencia;
@Repository
public interface ExperienciaRepository extends JpaRepository<Experiencia, Long> {

}
