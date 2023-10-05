//package com.example.demo.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.Entity.UserRegister;
//import com.example.demo.Repository.UserRegisterRepository;
//
//@Service
//public class UserRegisterService {
//	@Autowired
//	private UserRegisterRepository userRegisterRepository;
//	public List<UserRegister> getUserRegister(){
//		return userRegisterRepository.findAll();
//	}
//	public Optional<UserRegister> getUserRegisterbyId(int id)
//	{
//		return userRegisterRepository.findById(id);
//	}
//	public void postUserRegister(UserRegister userreg) {
//		userRegisterRepository.save(userreg);
//	}
//	public UserRegister putUserRegister(UserRegister userreg) {
//		return userRegisterRepository.saveAndFlush(userreg);
//	}
//	public void deleteUserRegister(int id) {
//		userRegisterRepository.deleteById(id);
//	}
//	
//
//}
