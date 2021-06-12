package com.intern.appapi.controller;

import com.intern.appapi.exception.ResourceNotFoundException;
import com.intern.appapi.model.Application;
import com.intern.appapi.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

//    get application by id
    @GetMapping("/applications/{id}")
    public ResponseEntity<Application> getApplicationById(@PathVariable Long id) {
        Application application = applicationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Student not exist id:"+id));
        return ResponseEntity.ok(application);
    }

//    update application
    @PutMapping("/applications/{id}")
    public ResponseEntity<Application> updateApplication(@PathVariable Long id, @RequestBody Application applicationDetails) {
        Application application = applicationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Application not exist id:"+id));
        application.setCompanyAcception(applicationDetails.getCompanyAcception());

        Application updateApplication = applicationRepository.save(application);
        return ResponseEntity.ok(updateApplication);
    }

//    delete application
    @DeleteMapping("/applications/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteApplication(@PathVariable Long id) {
        Application application = applicationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Application not exist id:"+id));
        applicationRepository.delete(application);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
