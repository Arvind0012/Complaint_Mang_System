package com.springCRUD.demo.repository;

import com.springCRUD.demo.model.User;
//import com.springCRUD.demo.model.UserLogin;
import jakarta.persistence.Id;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findOneByEmail(String email);


    public static User createUser(User user) {
        return null;
    }

    public static boolean existsByEmail(String email) {
        return false;
    }



}
