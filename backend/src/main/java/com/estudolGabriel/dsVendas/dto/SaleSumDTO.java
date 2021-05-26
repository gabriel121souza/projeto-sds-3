package com.estudolGabriel.dsVendas.dto;

import java.io.Serializable;

import com.estudolGabriel.dsVendas.entities.Seller;

public class SaleSumDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String sellerSumName;
	private Double sum;
	
	public SaleSumDTO() {
		
	}
	public SaleSumDTO(Seller seller, Double sum) {
		this.sellerSumName = seller.getName();
		this.sum = sum;
	}
	public String getSellerSumName() {
		return sellerSumName;
	}
	public void setSellerSumName(String sellerSumName) {
		this.sellerSumName = sellerSumName;
	}
	public Double getSum() {
		return sum;
	}
	public void setSum(Double sum) {
		this.sum = sum;
	}
	
	
	
}
