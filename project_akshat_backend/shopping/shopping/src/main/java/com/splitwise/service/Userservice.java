package com.splitwise.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.splitwise.models.User;
import com.splitwise.repository.Userrepository;

@Service
public class Userservice {

    private final Userrepository userRepository;

    @Autowired
    public Userservice(Userrepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }
    
    public User findByuserName(String username) {
    	return userRepository.findByuserName(username);
    }
    
    public List<User> getAllUsernames(){
    	return userRepository.getAllUsernames();
    }

}

