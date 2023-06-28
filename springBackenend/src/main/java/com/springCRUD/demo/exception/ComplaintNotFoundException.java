package com.springCRUD.demo.exception;

public class ComplaintNotFoundException extends RuntimeException{

    public ComplaintNotFoundException(Long id){
        super("Could not found complaint with id " +id);
    }
}
