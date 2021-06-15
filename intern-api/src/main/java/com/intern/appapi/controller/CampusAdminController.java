package com.intern.appapi.controller;


import com.intern.appapi.repository.CampusAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api/intern")
public class CampusAdminController {

    @Autowired
    private CampusAdminRepository campusAdminRepository;

//    get all campus admin

//    get campus admin by id

//    update campus admin
}
