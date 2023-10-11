package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="paymentstatus")
@Getter
@Setter
public class PaymentStatus {
	
	@Id
	private int invoiceNumber;
	private String username;
	private String paymentmethod;
	private String totalPrice;
	private String paymentstatus;

}
