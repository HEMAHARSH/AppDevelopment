package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.PaymentStatus;
import com.example.demo.Repository.PaymentStatusRepository;

@Service
public class PaymentStatusService {
	@Autowired
	private PaymentStatusRepository repository;

	public List<PaymentStatus> getAllUsers() {
		// TODO Auto-generated method stub
		return repository.findAll() ;
	}

	public void postDatalist(PaymentStatus list) {
		// TODO Auto-generated method stub
		repository.save(list);
	}

	 public void update(PaymentStatus status) {
	        repository.saveAndFlush(status);
	    }

	    public void delete(int invoiceNumber) {
	        repository.deleteById(invoiceNumber);
	    }

}
