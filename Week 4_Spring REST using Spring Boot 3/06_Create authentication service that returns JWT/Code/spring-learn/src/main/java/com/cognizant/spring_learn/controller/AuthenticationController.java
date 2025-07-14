package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    // Strong secret key with length >= 32 chars (256 bits)
    private static final String SECRET_KEY = "this_is_a_very_long_and_secure_secret_key_123!";

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            // Extract Base64 encoded username:password
            String base64Credentials = authHeader.substring("Basic ".length()).trim();
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            String[] values = credentials.split(":", 2);

            String username = values[0];
            String password = values[1];

            // TODO: Replace this with real user validation
            if ("user".equals(username) && "pwd".equals(password)) {
                // Create key from the secret string
                SecretKey key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));

                // Build JWT token signed with the secure key
                String token = Jwts.builder()
                        .setSubject(username)
                        .setIssuedAt(new Date(System.currentTimeMillis()))
                        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour expiry
                        .signWith(key)  // Use SecretKey here
                        .compact();

                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                return response;
            }
        }

        throw new RuntimeException("Invalid Credentials");
    }
}
