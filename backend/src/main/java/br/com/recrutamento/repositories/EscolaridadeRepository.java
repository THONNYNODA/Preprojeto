package br.com.recrutamento.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.recrutamento.entities.Escolaridade;
@Repository
public interface EscolaridadeRepository extends JpaRepository<Escolaridade, Long> {

}
