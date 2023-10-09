package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Entity.ContactUs;
import com.example.demo.Repository.ContactUsRepository;
import com.example.demo.Service.ContactUsService;

@Service
public class ContactUsService {

	
	@Autowired
	private ContactUsRepository repository;
	

	    public List<ContactUs> getAllUsers() {
	        return repository.findAll();
	    }


		public void postDatalist(ContactUs list) {
			// TODO Auto-generated method stub
			repository.save(list);
		}
	
	

}
