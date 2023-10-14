package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.example.demo.Entity.enumerate.Role;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
	
	private final   JwtAuthenticationFilter jwtAuthFilter ;
	private final AuthenticationProvider authenticationProvider ;

	@Bean
	 public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http .csrf(csrf -> csrf.disable())
		.authorizeHttpRequests(authorize -> authorize.requestMatchers("/api/v1/auth/**").permitAll()
				 .requestMatchers("/api/v1/user/**").hasRole( Role.USER.name())
				 .anyRequest().authenticated())
			       .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
		.authenticationProvider(authenticationProvider)
		.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
			
		   
	}
	
}

