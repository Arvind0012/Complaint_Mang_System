package com.springCRUD.demo.repository;

import com.springCRUD.demo.model.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, Long> {

    UserLogin findByEmailAndPassword(String email, String password);

    UserLogin findByEmail(String username);
}
