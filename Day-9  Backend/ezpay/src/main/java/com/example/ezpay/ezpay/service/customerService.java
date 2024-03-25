package com.example.ezpay.ezpay.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ezpay.ezpay.dto.PaymentData;
import com.example.ezpay.ezpay.dto.RechargeData;
import com.example.ezpay.ezpay.model.AddOn;
import com.example.ezpay.ezpay.model.Customer;
import com.example.ezpay.ezpay.model.Payment;
import com.example.ezpay.ezpay.model.Plan;
import com.example.ezpay.ezpay.model.Recharge;
import com.example.ezpay.ezpay.repository.addonRepository;
import com.example.ezpay.ezpay.repository.customerRepository;
import com.example.ezpay.ezpay.repository.paymentRepository;
import com.example.ezpay.ezpay.repository.planRepository;
import com.example.ezpay.ezpay.repository.rechargeRepository;


@Service
public class customerService {
    
     @Autowired
    private planRepository PlanRepository;

    @Autowired
    private addonRepository AddonRepository;

    @Autowired
    private rechargeRepository RechargeRepository;

    @Autowired
    private paymentRepository PaymentRepository;

    @Autowired
    private customerRepository CustomerRepository;

     
    public List<Plan> getAllPlans() {
        return PlanRepository.findAll();
    }

    
    public void addRecharge(Long planId, RechargeData rechargeData) {
        @SuppressWarnings("null")
        Plan plan = PlanRepository.findById(planId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Plan ID"));

        Recharge recharge = new Recharge();
        recharge.setRechargePrice(rechargeData.getRechargePrice());
        recharge.setStatus(rechargeData.getStatus());
        recharge.setDate(new Date());
        recharge.setPlan(plan);
        

        RechargeRepository.save(recharge);
    }

    
    public void addAddonRecharge(Long addonId, RechargeData rechargeData) {
        @SuppressWarnings("null")
        AddOn addon = AddonRepository.findById(addonId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Addon ID"));

        Recharge recharge = new Recharge();
        recharge.setRechargePrice(rechargeData.getRechargePrice());
        recharge.setStatus(rechargeData.getStatus());
        recharge.setDate(new Date()); 
        
        
        recharge.setAddon(addon);


        RechargeRepository.save(recharge);
    }

    
    public List<AddOn> getAllAddons() {
        return AddonRepository.findAll();
    }

    
    public List<Recharge> getUserRecharges(Long userId) {
        return RechargeRepository.findByUserId(userId);
    }

    public void editRecharge(Long planId, RechargeData rechargeData) {
        RechargeRepository.updateRechargeByPlanId(planId,
                rechargeData.getRechargePrice(),
                rechargeData.getStatus(),
                new Date());
    }


    public void deleteRecharge(Long planId) {
        
        RechargeRepository.deleteByPlanId(planId);
    }


    public void makePayment(PaymentData paymentData) {
        Customer customer = CustomerRepository.findById(paymentData.getCustomerId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid Customer ID"));

        Payment payment = new Payment();
        payment.setStatus(paymentData.getStatus());
        payment.setTotalAmount(paymentData.getTotalAmount());
        payment.setPaymentDate(new Date()); 
        payment.setModeOfPayment(paymentData.getModeOfPayment());
        
        payment.setCustomer(customer);

        PaymentRepository.save(payment);
    }
    
    
}
