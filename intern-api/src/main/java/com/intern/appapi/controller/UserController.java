package com.intern.appapi.controller;

import com.intern.appapi.exception.ResourceNotFoundException;
import com.intern.appapi.model.User;
import com.intern.appapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "/api/intern")
public class UserController {

    @Autowired
    private UserRepository userRepository;

//    get all users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

//    create user
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        if(userOptional.isPresent()) {
            throw new ResourceNotFoundException("Email Taken");
        }
        return userRepository.save(user);
    }
//    get user by id
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not exist id:"+id));
        return ResponseEntity.ok(user);


    }
}
