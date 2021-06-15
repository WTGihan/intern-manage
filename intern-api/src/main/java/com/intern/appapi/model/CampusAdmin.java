package com.intern.appapi.model;

import javax.persistence.*;

@Entity
@Table(name="campus_admin")
public class CampusAdmin{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="username")
    private String username;

    @Column(name="adminName")
    private String adminName;

    @Column(name="contactnumber")
    private String contactnumber;

    @Column(name="university")
    private String university;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name="user_id", unique = true)
    private User user;


    public CampusAdmin() {

    }

    public CampusAdmin(String username, String adminName, String contactnumber, String university) {
        this.username = username;
        this.adminName = adminName;
        this.contactnumber = contactnumber;
        this.university = university;
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

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
