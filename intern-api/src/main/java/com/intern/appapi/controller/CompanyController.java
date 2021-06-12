package com.intern.appapi.controller;


import com.intern.appapi.model.Company;
import com.intern.appapi.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/intern")
public class CompanyController {

    @Autowired
   private CompanyRepository companyRepository;

//    get all companies
    @GetMapping("/companies")
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

//    create student
    @PostMapping("/companies")
    public Company createComapny(@RequestBody Company company) {
        return companyRepository.save(company);
    }

}
