package com.example.ezpay.ezpay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ezpay.ezpay.dto.AddOnDTO;
import com.example.ezpay.ezpay.service.addonService;



@RestController
@RequestMapping("/api/addon")

public class addonController {

    @Autowired
    private addonService AddonService;

   @PostMapping
    public ResponseEntity<String> addAddon(@RequestBody AddOnDTO addonDTO) {
        AddonService.addAddon(addonDTO);
        return ResponseEntity.ok("Addon Added");
    }
    
}
