package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name = "exercise")
public class Exercise {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String exercise;

    @Column
    private Integer sets;

    @Column
    private Integer reps;

    @Column
    private Integer weight;

    @Column
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

    public Integer getSets() {
        return sets;
    }

    public void setSets(Integer sets) {
        this.sets = sets;
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
