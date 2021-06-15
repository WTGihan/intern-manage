package com.intern.appapi.repository;

import com.intern.appapi.model.CampusAdmin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CampusAdminRepository extends JpaRepository<CampusAdmin, Long> {
}
