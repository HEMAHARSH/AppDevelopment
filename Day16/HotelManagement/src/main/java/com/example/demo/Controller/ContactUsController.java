package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.ContactUs;
import com.example.demo.Service.ContactUsService;
@RestController
@RequestMapping("/user")
public class ContactUsController {
	@Autowired
	private ContactUsService service;
	 @GetMapping("/getfeedback")
	    public List<ContactUs> getAllUsers() {
	        return service.getAllUsers();
	    }
	
	@PostMapping("/postfeedback")
	public void postDatalist(@RequestBody ContactUs list) {
		
		service.postDatalist(list);
	}


}
