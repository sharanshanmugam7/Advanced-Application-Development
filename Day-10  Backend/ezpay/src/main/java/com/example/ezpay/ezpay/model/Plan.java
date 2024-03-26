package com.example.ezpay.ezpay.model;


import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Plan {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planId;
    private String planName;
    private String planType;
    private String planValidity;
    private String planDetails;
    private double planPrice;
    private Integer planData;
    private String planSpeed;
    @OneToMany(mappedBy = "plan")
    private List<Recharge> recharges;
}
