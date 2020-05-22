package org.sid.web;

import org.sid.dao.TaskRepository;
import org.sid.entities.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(value = "http://localhost:4200")
@RestController
public class TaskRestController {
    @Autowired
    private TaskRepository taskRepository;
    @GetMapping("/tasks")
    public List<Task> listTask(){
        return taskRepository.findAll();
    }
    @PostMapping("/tasks")
    public Task save(@RequestBody Task t){
        return taskRepository.save(t);
    }
}
