package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Feedback;
import com.example.demo.service.FeedbackService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/feedback")
public class FeedbackController {
	
	@Autowired
	private FeedbackService feedbackService;
	 @GetMapping("/getfeedback")
	    public ResponseEntity<List<Feedback>> getAllUsers() {
	        List<Feedback> contactUsList = feedbackService.getAllUsers();
	        return ResponseEntity.ok(contactUsList);
	    }
	 @PostMapping("/postfeedback")
		public ResponseEntity<String>postData(@RequestBody Feedback list) {

			feedbackService.saveFeedback(list);
		    return ResponseEntity.ok("Success");
		}
	 @GetMapping("/Feedbackcount")
	 public Long getTotalUsers() {
	        return feedbackService.getTotalUsers();
	    }


}
