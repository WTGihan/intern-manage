package com.intern.appapi.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name="user_id", unique = true)
    private User user;


    @Column(name="username")
    private String username;
    @Column(name="adminAcception")
    private String adminAcception;
    @Column(name="companyAdminName")
    private String companyAdminName;
    @Column(name="email")
    private String email;
    @Column(name="contactnumber")
    private String contactnumber;
    @Column(name="company")
    private String company;
    @Column(name="technologies")
    private String technologies;
    @Column(name="qualificationAndExperience")
    private String qualificationAndExperience;
    @Column(name="aboutCompany")
    private String aboutCompany;


    @OneToMany(mappedBy="company",cascade = CascadeType.REMOVE)
    private Set<Application> application;


    public Company() {

    }

    public Company(String username, String adminAcception, String companyAdminName, String email, String contactnumber, String company, String technologies, String qualificationAndExperience, String aboutCompany) {
        this.username = username;
        this.adminAcception = adminAcception;
        this.companyAdminName = companyAdminName;
        this.email = email;
        this.contactnumber = contactnumber;
        this.company = company;
        this.technologies = technologies;
        this.qualificationAndExperience = qualificationAndExperience;
        this.aboutCompany = aboutCompany;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAdminAcception() {
        return adminAcception;
    }

    public void setAdminAcception(String adminAcception) {
        this.adminAcception = adminAcception;
    }

    public String getCompanyAdminName() {
        return companyAdminName;
    }

    public void setCompanyAdminName(String companyAdminName) {
        this.companyAdminName = companyAdminName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactnumber() {
        return contactnumber;
    }

    public void setContactnumber(String contactnumber) {
        this.contactnumber = contactnumber;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getTechnologies() {
        return technologies;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    public String getQualificationAndExperience() {
        return qualificationAndExperience;
    }

    public void setQualificationAndExperience(String qualificationAndExperience) {
        this.qualificationAndExperience = qualificationAndExperience;
    }

    public String getAboutCompany() {
        return aboutCompany;
    }

    public void setAboutCompany(String aboutCompany) {
        this.aboutCompany = aboutCompany;
    }
}
