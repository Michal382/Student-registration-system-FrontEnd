package com.michalzyw.studentSystem.service;

import com.michalzyw.studentSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
