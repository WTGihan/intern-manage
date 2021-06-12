package com.intern.appapi.controller;

import com.intern.appapi.model.Application;
import com.intern.appapi.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/intern")
public class ApplicationController {

    @Autowired
    private ApplicationRepository applicationRepository;


//   get all applications
    @GetMapping("/applications")
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

//    create application
    @PostMapping("/applications")
    public Application createApplication(@RequestBody Application application) {
        return applicationRepository.save(application);
    }
}
