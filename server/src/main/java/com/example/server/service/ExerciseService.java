package com.example.server.service;

import com.example.server.model.Exercise;
import org.springframework.http.HttpStatus;

public interface ExerciseService {
    Iterable<Exercise> getExercises();
    Exercise createExercise(Exercise exercise);
    Exercise updateExercise(Exercise exercise);
    HttpStatus deleteExercise(Long id);
}
