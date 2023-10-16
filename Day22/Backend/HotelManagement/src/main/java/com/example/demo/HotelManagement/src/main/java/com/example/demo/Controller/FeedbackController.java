package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.demo.Entity.Feedback;


import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;




@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor

public class FeedbackController {
	private final WebClient.Builder webClientBuilder;
	@PostMapping("/submitFeedback")
	public Flux<String> submitFeedback(@RequestBody List<Feedback> feedbackList) {
	    Flux<Feedback> feedbackFlux = Flux.fromIterable(feedbackList);
	    return feedbackFlux.flatMap(feedback -> {
	        return webClientBuilder.baseUrl("http://localhost:8687")
	            .build()
	            .post()
	            .uri("/feedback/postfeedback")
	            .contentType(MediaType.APPLICATION_JSON)
	            .body(BodyInserters.fromValue(feedback))
	            .retrieve()
	            .bodyToMono(String.class)
	            .flux();
	    });
	}
	@GetMapping("/getallfeedback")
    public Flux<Feedback> getAllFeedback() {
        return webClientBuilder.baseUrl("http://localhost:8687").build()
                .get()
                .uri("/feedback/getfeedback")
                .retrieve()
                .bodyToFlux(Feedback.class);
    }
	@GetMapping("/count")
    public Flux<Long> Feedbackcount() {
        return webClientBuilder.baseUrl("http://localhost:8687").build()
                .get()
                .uri("/feedback/Feedbackcount")
                .retrieve()
                .bodyToFlux(Long.class);
    }
	    }


