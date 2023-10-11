package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin("*")
@RequestMapping("api/v1/auth")
public class PaymentStatusController {
	@Autowired
	private PaymentStatusService service;

	 @GetMapping("/getbill")
	    public ResponseEntity<List<PaymentStatus>> getAllUsers() {
	        List<PaymentStatus> contactUsList = service.getAllUsers();
	        return ResponseEntity.ok(contactUsList);
	    }
	@PostMapping("/postbill")
	public ResponseEntity<String>postData(@RequestBody PaymentStatus list) {

		service.postDatalist(list);
	    return ResponseEntity.ok("Success");
	}
	@PutMapping("/putbill")
	   public ResponseEntity<String> updateDetails(@RequestBody PaymentStatus status,@RequestParam int invoiceNumber)
	   {
	   	status.setInvoiceNumber(invoiceNumber);
	  	    service.update(status);
	  	    return ResponseEntity.ok("Updated");
	   }
	   @DeleteMapping("/deletebill")
	   public ResponseEntity<String> deleteDetails(@RequestParam int invoiceNumber)
	   {
		   service.delete(invoiceNumber);
		   return ResponseEntity.ok("Deleted");
	   }
	   
	   

}
