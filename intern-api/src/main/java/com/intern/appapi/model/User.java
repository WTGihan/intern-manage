package com.intern.appapi.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="user")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="userType")
    private String userType;
    @Column(name="email")
    private String email;
    @Column(name = "password")
    private String password;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @JoinColumn
    private Student student;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @JoinColumn
    private Company company;

    public User() {

    }

    public User(String userType, String email, String password) {
        this.userType = userType;
        this.email = email;
        this.password = password;
    }

    public User(String email) {
        this.email = email;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public String getUserType() {
        return userType;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
