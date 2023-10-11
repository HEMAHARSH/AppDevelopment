package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservedList {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int listId;
	private String Name;
	private String Checkin;
	private String Checkout;
	private String Amount;
	private String PaymentStatus;
	
 
}
