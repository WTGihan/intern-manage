package com.intern.appapi.model;

import javax.persistence.*;

@Entity
@Table(name="application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="companyAcception")
    private String companyAcception;


    @ManyToOne
    @JoinColumn(name="student_id", nullable=false)
    private Student student;

    @ManyToOne
    @JoinColumn(name="company_id", nullable=false)
    private Company company;

    public  Application() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Application(String companyAcception) {
        this.companyAcception = companyAcception;
    }

    public String getCompanyAcception() {
        return companyAcception;
    }

    public void setCompanyAcception(String companyAcception) {
        this.companyAcception = companyAcception;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
