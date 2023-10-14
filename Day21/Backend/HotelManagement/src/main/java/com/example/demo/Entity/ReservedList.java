package com.example.demo.Entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
@Table(name="billingstatus")
public class ReservedList {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int listId;
	private String name;
	private String amount;
	private String quantity;
	private String billingstatus;
	
 
}
