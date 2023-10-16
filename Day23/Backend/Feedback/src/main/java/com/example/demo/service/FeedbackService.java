package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Feedback;
import com.example.demo.repository.FeedbackRepository;

@Service
public class FeedbackService {
	@Autowired
	private FeedbackRepository feedbackRepository;
	
	public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

	public List<Feedback> getAllUsers() {
		// TODO Auto-generated method stub
		return feedbackRepository.findAll();
	}
	  public long getTotalUsers() {
	        return feedbackRepository.count(); 
	    }
	
}
