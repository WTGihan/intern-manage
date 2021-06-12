package com.intern.appapi.repository;

import com.intern.appapi.model.Application;
import com.intern.appapi.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

}
