package com.intern.appapi.controller;


import com.intern.appapi.exception.ResourceNotFoundException;
import com.intern.appapi.model.Company;
import com.intern.appapi.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
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

//    get company by id
    @GetMapping("/companies/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable Long id) {
        Company company = companyRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Company not exist id:"+id));
        return ResponseEntity.ok(company);
    }

//    update company
    @PutMapping("/companies/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable Long id, @RequestBody Company companyDetails) {
        Company company = companyRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Company not exist id:"+id));
        company.setUsername(companyDetails.getUsername());
        company.setAdminAcception(companyDetails.getAdminAcception());
        company.setCompanyAdminName(companyDetails.getCompanyAdminName());
        company.setEmail(companyDetails.getEmail());
        company.setContactnumber(companyDetails.getContactnumber());
        company.setCompany(companyDetails.getCompany());
        company.setTechnologies(companyDetails.getTechnologies());
        company.setQualificationAndExperience(companyDetails.getQualificationAndExperience());
        company.setAboutCompany(companyDetails.getAboutCompany());

        Company updateCompany = companyRepository.save(company);
        return ResponseEntity.ok(updateCompany);


    }

//    delete Company
    @DeleteMapping("/companies/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCompany(@PathVariable Long id) {
        Company company = companyRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Company not exist id:"+id));
        companyRepository.delete(company);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return  ResponseEntity.ok(response);
    }

}
