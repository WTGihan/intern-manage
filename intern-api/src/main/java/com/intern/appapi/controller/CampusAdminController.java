package com.intern.appapi.controller;


import com.intern.appapi.exception.ResourceNotFoundException;
import com.intern.appapi.model.CampusAdmin;
import com.intern.appapi.repository.CampusAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/intern")
public class CampusAdminController {

    @Autowired
    private CampusAdminRepository campusAdminRepository;

//    get all campus admin
    @GetMapping("/campusAdmin")
    public List<CampusAdmin> getAllCampusAdmins() {
        return campusAdminRepository.findAll();
    }

//    get campus admin by id
    @GetMapping("/campusAdmin/{id}")
    public ResponseEntity<CampusAdmin> getCampusAdminById(@PathVariable Long id) {
        CampusAdmin campusAdmin = campusAdminRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Campus Admin not exist id:"+id));
        return ResponseEntity.ok(campusAdmin);
    }

//    update campus admin
    @PutMapping("/campusAdmin/{id}")
    public ResponseEntity<CampusAdmin> updateCampusAdmin(@PathVariable Long id, @RequestBody CampusAdmin campusAdminDetails) {

        CampusAdmin campusAdmin = campusAdminRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Campus Admin not exist id:"+id));
        campusAdmin.setUsername(campusAdminDetails.getUsername());
        campusAdmin.setContactnumber(campusAdminDetails.getContactnumber());
        campusAdmin.setUniversity(campusAdminDetails.getUniversity());
        campusAdmin.setAdminName(campusAdminDetails.getAdminName());

        CampusAdmin updateCampusAdmin = campusAdminRepository.save(campusAdmin);
        return  ResponseEntity.ok(updateCampusAdmin);

    }
}
