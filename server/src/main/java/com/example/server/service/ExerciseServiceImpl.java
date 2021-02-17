package com.example.server.service;

import com.example.server.model.Exercise;
import com.example.server.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

public class ExerciseServiceImpl implements ExerciseService {

    @Autowired
    ExerciseRepository exerciseRepository;
    @Override
    public Iterable<Exercise> getExercises() {
        return exerciseRepository.findAll();
    }

    @Override
    public Exercise createExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    @Override
    public Exercise updateExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    @Override
    public HttpStatus deleteExercise(Long id) {
        exerciseRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
