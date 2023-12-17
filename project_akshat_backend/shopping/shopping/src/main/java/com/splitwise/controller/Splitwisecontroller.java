package com.splitwise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.splitwise.models.User;
import com.splitwise.service.Userservice;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Splitwisecontroller {
	
	private final Userservice userService;
	
	@Autowired
	public Splitwisecontroller(Userservice userService) {
		this.userService = userService;
	}
	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		userService.saveUser(user);
		return new ResponseEntity<>("Successfully added the user",HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody User user) {
		User resultUser=userService.findByuserName(user.getUserName());
		if(resultUser != null && resultUser.getPassword().equals(user.getPassword()))
		    return new ResponseEntity<>("User Exists LogedIn",HttpStatus.OK);
		else
			return new ResponseEntity<>("Wrong user name or password",HttpStatus.FORBIDDEN);
	}
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return userService.getAllUsernames();
	}

}
