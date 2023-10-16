package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


		public String postDatalist(ContactUs list) {
			// TODO Auto-generated method stub
			repository.save(list);
			return "success";
		}

		 public long getTotalUsers() {
		        return repository.count(); 
		    }
	

}
