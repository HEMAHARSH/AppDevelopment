package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.ListService;
import com.example.demo.Entity.ReservedList;

@RestController
public class ListController {
	
	@Autowired
	private ListService listService;
	@GetMapping("/get")
	public List<ReservedList> getDatalist(){
		return listService.getData();
	}
	
	@PostMapping("/post")
	public void postDatalist(@RequestBody ReservedList list) {
		
		listService.postData(list);
	}

}
