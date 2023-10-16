package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ContactUs;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Flux;


@RestController
@RequestMapping("/contact")
public class ContactUsController {
    @Autowired
    private WebClient.Builder webClientBuilder;

    @GetMapping("/getall")
    public Flux<ContactUs> getAllFeedback() {
        return webClientBuilder.baseUrl("http://localhost:8087").build()
                .get()
                .uri("/api/v1/auth/getcontactus")
                .retrieve()
                .bodyToFlux(ContactUs.class);
    }
}
