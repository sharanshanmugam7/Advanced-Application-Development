package com.example.ezpay.ezpay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ezpay.ezpay.model.Customer;

public interface customerRepository extends JpaRepository<Customer, Integer>{
    
}