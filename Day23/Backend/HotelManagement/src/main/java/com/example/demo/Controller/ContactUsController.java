package com.example.demo.Controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.ContactUs;
import com.example.demo.Service.ContactUsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor

public class ContactUsController {
	@Autowired
	private ContactUsService service;

	 @GetMapping("/getcontactus")
	    public ResponseEntity<List<ContactUs>> getAllUsers() {
	        List<ContactUs> contactUsList = service.getAllUsers();
	        return ResponseEntity.ok(contactUsList);
	    }
	@PostMapping("/postcontactus")
	public ResponseEntity<String>postData(@RequestBody ContactUs list) {

		service.postDatalist(list);
	    return ResponseEntity.ok("Success");
	}
	@GetMapping("/totalcountcontroller")
    public Long getTotalUsers() {
        return service.getTotalUsers();
    }

}
