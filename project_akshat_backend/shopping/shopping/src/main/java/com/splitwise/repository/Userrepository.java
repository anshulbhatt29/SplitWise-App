package com.splitwise.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.splitwise.models.User;



public interface Userrepository extends MongoRepository<User, String> {

	User findByuserName(String username);
	@Query(value = "{}", fields = "{ 'userName' : 1}")
    List<User> getAllUsernames();
    // Custom query methods can be added here if needed
}

