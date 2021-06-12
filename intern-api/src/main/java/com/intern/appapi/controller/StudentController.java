package com.intern.appapi.controller;

import com.intern.appapi.exception.ResourceNotFoundException;
import com.intern.appapi.model.Student;
import com.intern.appapi.model.User;
import com.intern.appapi.repository.StudentRepository;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(path="/api/intern")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;


    //    get all students
    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }


    //    create student
    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student) {
//        System.out.print(student);
        return studentRepository.save(student);
    }


    //    get Student by id
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Student not exist id:"+id));
        return ResponseEntity.ok(student);
    }


    //    update student
    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {



        Student student = studentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Student not exist id:"+id));
        student.setUsername(studentDetails.getUsername());
        student.setAdminAcception(studentDetails.getAdminAcception());
        student.setStudentName(studentDetails.getStudentName());
        student.setContactnumber(studentDetails.getContactnumber());
        student.setUniversity(studentDetails.getUniversity());
        student.setLanguageSkill(studentDetails.getLanguageSkill());
        student.setSoftSkill(studentDetails.getSoftSkill());
        student.setProjects(studentDetails.getProjects());

        Student updateStudent = studentRepository.save(student);
        return ResponseEntity.ok(updateStudent);
    }

//    delete student
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
        Student student = studentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not exist id:"+id));
        studentRepository.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return  ResponseEntity.ok(response);
    }
}
