package com.springCRUD.demo.repository;

import com.springCRUD.demo.model.User;
import com.springCRUD.demo.model.UserComplaint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComplaintRepository extends JpaRepository<UserComplaint, Long>{

    UserComplaint findOneByToken(String token);
    UserComplaint findOneById(Long id);

}
