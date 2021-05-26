package com.estudolGabriel.dsVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estudolGabriel.dsVendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
