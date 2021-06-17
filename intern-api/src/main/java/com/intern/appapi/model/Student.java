package com.intern.appapi.model;

import javax.persistence.*;

@Entity
@Table(name="student")
public class Student{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="username")
    private String username;

    @Column(name="adminAcception")
    private String adminAcception;

    @Column(name="studentName")
    private String studentName;


    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", unique = true)
    private User user;


    @Column(name="contactnumber", length = 10)
    private String contactnumber;



    @Column(name="university")
    private String university;

    @Column(name="languageSkill")
    private String languageSkill;

    @Column(name="softSkill")
    private String softSkill;

    @Column(name="projects")
    private String projects;

    @OneToOne(mappedBy = "student", cascade = CascadeType.REMOVE)
    @JoinColumn
    private Application application;

    public Student() {

    }

    public Student(String username, String adminAcception, String studentName, String contactnumber, String university, String languageSkill, String softSkill, String projects) {
        this.username = username;
        this.adminAcception = adminAcception;
        this.studentName = studentName;
        this.contactnumber = contactnumber;
        this.university = university;
        this.languageSkill = languageSkill;
        this.softSkill = softSkill;
        this.projects = projects;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getContactnumber() {
        return contactnumber;
    }

    public void setContactnumber(String contactnumber) {
        this.contactnumber = contactnumber;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getLanguageSkill() {
        return languageSkill;
    }

    public void setLanguageSkill(String languageSkill) {
        this.languageSkill = languageSkill;
    }

    public String getSoftSkill() {
        return softSkill;
    }

    public void setSoftSkill(String softSkill) {
        this.softSkill = softSkill;
    }

    public String getProjects() {
        return projects;
    }

    public void setProjects(String projects) {
        this.projects = projects;
    }
}
