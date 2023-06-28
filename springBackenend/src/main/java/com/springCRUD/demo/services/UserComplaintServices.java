package com.springCRUD.demo.services;

import com.springCRUD.demo.model.UserComplaint;
import com.springCRUD.demo.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserComplaintServices {

    @Autowired
    private ComplaintRepository complaintRepository;

    public ResponseEntity<UserComplaint> registerUserComplaint(UserComplaint userComplaint) {

        String token = UUID.randomUUID().toString().substring(0, 5);
        userComplaint.setToken(token);
        return ResponseEntity.ok(complaintRepository.save(userComplaint));
    }

    public ResponseEntity<UserComplaint> getUserComplaint(String token) {
        return ResponseEntity.ok(complaintRepository.findOneByToken(token));
    }

    public ResponseEntity<UserComplaint> setUserComplaintStatus(Long id, String status) {
        UserComplaint userComplaint = complaintRepository.findOneById(id);
        userComplaint.setStatus(status);
        return ResponseEntity.ok(complaintRepository.save(userComplaint));
    }
}
