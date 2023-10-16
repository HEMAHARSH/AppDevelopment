package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.ListService;
import com.example.demo.Entity.BillingStatus;

@RestController
@RequestMapping("/api/v1/auth")

public class BillingStatusController {
	
	@Autowired
	private ListService listService;
	@GetMapping("/get")
	public List<BillingStatus> getDatalist(){
		return listService.getData();
	}
	
	@PostMapping("/post")
	public void postDatalist(@RequestBody BillingStatus list) {
		
		listService.postData(list);
	}

}
