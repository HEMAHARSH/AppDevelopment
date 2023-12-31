package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.PaymentStatus;
import com.example.demo.Service.PaymentStatusService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")

public class PaymentStatusController {
	@Autowired
	private PaymentStatusService service;

	 @GetMapping("/getbill")
	    public ResponseEntity<List<PaymentStatus>> getAllUsers() {
	        List<PaymentStatus> contactUsList = service.getAllUsers();
	        return ResponseEntity.ok(contactUsList);
	    }
	 @GetMapping("/difference")
	    public ResponseEntity<Integer> getRoomVacant() {
	        
	            // Calculate the difference between the total and occupied rooms
	            int difference = service.calculateVacant();

	            return ResponseEntity.ok(difference);
	        
	        }
	 @GetMapping("/booked")
	 public ResponseEntity<Integer> getRoomsBooked()
	 {
		 return ResponseEntity.ok(service.getbooked());
	 }
	@PostMapping("/postbill")
	public ResponseEntity<String>postData(@RequestBody PaymentStatus list) {

		service.postDatalist(list);
	    return ResponseEntity.ok("Success");
	}
	@GetMapping("/total")
	public ResponseEntity<Integer> totalamount()
	{
		return ResponseEntity.ok(service.gettotal());
	}

	   

}
