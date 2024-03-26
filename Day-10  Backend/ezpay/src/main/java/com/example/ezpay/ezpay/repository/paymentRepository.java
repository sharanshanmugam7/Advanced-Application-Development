package com.example.ezpay.ezpay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ezpay.ezpay.model.Payment;

public interface paymentRepository extends JpaRepository<Payment,Long>{
    
}
