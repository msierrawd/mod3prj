package com.example.server.controller;

import com.example.server.model.Exercise;
import com.example.server.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/exercises")
public class ExerciseController {
    @Autowired
    ExerciseService exerciseService;

    @GetMapping
    public Iterable<Exercise> getExercises(){
        return exerciseService.getExercises();
    }

    @PostMapping
    public Exercise createExercise(@RequestBody Exercise exercise){
        return exerciseService.createExercise(exercise);
    }

    @PatchMapping
    public Exercise updateExercise(@RequestBody Exercise exercise){
        return exerciseService.updateExercise(exercise);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteExercise(@PathVariable Long id){
        return exerciseService.deleteExercise(id);
    }
}
