package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entity.ContactUs;
import com.example.demo.repository.ContactUsRepository;


@Service
public class ContactUsService {
	
	@Autowired
	private ContactUsRepository repository;
	 @Autowired
	 private RestTemplate restTemplate;
	 public List<ContactUs> getAllFeedback() {
	        // Make an HTTP GET request to the ContactUs project's /getfeedback endpoint
	        String url = "http://localhost:8080/getfeedback"; // Update with the actual URL

	        // Use restTemplate to make the request and retrieve the response
	        List<ContactUs> feedbackList = restTemplate.getForObject(url, List.class);

	        return feedbackList;
	 }
	public void postData(ContactUs contactus) {
		repository.save(contactus);
	}

}
