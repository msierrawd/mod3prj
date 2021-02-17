package com.example.server.model;

public class Exercise {
    private Long id;
    private String exercise;
    private Integer set;
    private Integer reps;
    private Integer weight;
    private String lborkg;


    public Exercise() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExercise() {
        return exercise;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public Integer getSet() {
        return set;
    }

    public void setSet(Integer set) {
        this.set = set;
    }

    public Integer getReps() {
        return reps;
    }

    public void setReps(Integer reps) {
        this.reps = reps;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getLborkg() {
        return lborkg;
    }

    public void setLborkg(String lborkg) {
        this.lborkg = lborkg;
    }
}
