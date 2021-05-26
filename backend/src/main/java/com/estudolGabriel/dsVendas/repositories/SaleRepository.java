package com.estudolGabriel.dsVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estudolGabriel.dsVendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
