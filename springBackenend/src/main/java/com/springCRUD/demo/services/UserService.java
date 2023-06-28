package com.springCRUD.demo.services;

import com.springCRUD.demo.DTO.LoginRequest;
import com.springCRUD.demo.model.User;
import com.springCRUD.demo.repository.UserRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public User registerUser(User user) {
        try{
            // Create a new User object
            User newUser = new User();
            newUser.setUsername(user.getUsername());
            newUser.setEmail(user.getEmail());
            newUser.setPassword(user.getPassword());

            // Save the new user to the database
            return userRepository.save(newUser);
        }
        catch ( DataIntegrityViolationException e ) {
                throw new IllegalArgumentException("Email already exists");
            }

    }

    public ResponseEntity<User> loginUser(LoginRequest loginRequest) {
        User user = userRepository.findOneByEmail(loginRequest.getEmail());

        if (user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(user);
        } else {
            throw new RuntimeException("User creds not matched");
        }
    }
}
