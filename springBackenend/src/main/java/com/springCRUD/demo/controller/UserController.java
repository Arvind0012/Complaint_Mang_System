package com.springCRUD.demo.controller;

import ch.qos.logback.core.testUtil.RandomUtil;
import com.springCRUD.demo.DTO.LoginRequest;
import com.springCRUD.demo.DTO.UpdateStatusRequest;
import com.springCRUD.demo.exception.ComplaintNotFoundException;
import com.springCRUD.demo.exception.UserNotFoundException;
import com.springCRUD.demo.model.User;
import com.springCRUD.demo.model.UserComplaint;
import com.springCRUD.demo.repository.ComplaintRepository;
import com.springCRUD.demo.repository.UserRepository;
import com.springCRUD.demo.services.UserComplaintServices;
import com.springCRUD.demo.services.UserService;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin()
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ComplaintRepository complaintRepository;



    // To add the user to database
    @Autowired
    private UserService userService;

    @Autowired
    private UserComplaintServices userComplaintServices;

    @PostMapping("/registerUser")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }

    // for User Login
    @PostMapping("/loginUser")
    public ResponseEntity<User> loginUser(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }


    // To add the Complaint to database
    @PostMapping("/registerComplaint")
    public ResponseEntity<UserComplaint> newComplaint(@RequestBody UserComplaint newComplaint){
        return userComplaintServices.registerUserComplaint(newComplaint);
    }

    @GetMapping("/complaintStatus/{token}")
    public ResponseEntity<UserComplaint> getComplaint(@PathVariable("token") String token) {
        return userComplaintServices.getUserComplaint(token);
    }

    @PutMapping("/updateComplaintStatus")
    public ResponseEntity<UserComplaint> getComplaint(@RequestBody UpdateStatusRequest request) {
        return userComplaintServices.setUserComplaintStatus(request.getId(), request.getStatus());
    }

    // get users details from database
    @GetMapping("/allUser")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    // get Complaint details from database
    @GetMapping("/allComplaint")
    List<UserComplaint> getAllComplaints(){
        return complaintRepository.findAll();
    }

    // get user with specified id
    @GetMapping("/getUser/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }


    // edit particular user using their id
    @PutMapping("/editUser/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundException(id));

    }


    // to delete particular user with id
    @DeleteMapping("/deleteUser/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted Successfully";
    }

    // to delete a complaint
    @DeleteMapping("/deleteComplaint/{id}")
    String deleteComplaint(@PathVariable Long id){
        if(!complaintRepository.existsById(id)){
            throw new ComplaintNotFoundException(id);
        }
        complaintRepository.deleteById(id);
        return "Complaint with id "+id+" has been deleted Successfully";
    }


}
