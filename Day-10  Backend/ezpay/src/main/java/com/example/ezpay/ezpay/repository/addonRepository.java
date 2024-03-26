package com.example.ezpay.ezpay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ezpay.ezpay.model.AddOn;


public interface addonRepository extends JpaRepository<AddOn,Long>{
    
    @Modifying
    @Query("UPDATE AddOn a " +
           "SET a.addonName = :addonName, " +
           "a.addonPrice = :addonPrice, " +
           "a.addonDetails = :addonDetails, " +
           "a.addonValidity = :addonValidity, " +
           "a.addonData = :addonData, " +
           "a.addonType = :addonType, " +
           "a.addonSpeed = :addonSpeed " +
           "WHERE a.addonId = :addonId")
    void updateAddon(@Param("addonId") Long addonId,
                     @Param("addonName") String addonName,
                     @Param("addonPrice") double addonPrice,
                     @Param("addonDetails") String addonDetails,
                     @Param("addonValidity") String addonValidity,
                     @Param("addonData") Integer addonData,
                     @Param("addonType") String addonType,
                     @Param("addonSpeed") String addonSpeed);
    
}
