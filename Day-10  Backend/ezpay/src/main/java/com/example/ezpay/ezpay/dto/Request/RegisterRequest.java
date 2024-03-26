package com.example.ezpay.ezpay.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor  
@NoArgsConstructor

public class RegisterRequest {
    
    private Long userId;
    private String email;
    private String password;
    private String username;
    private String mobileNumber;
    private String userRole;
    
}
