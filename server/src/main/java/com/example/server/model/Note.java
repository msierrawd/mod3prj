package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name = "note")
public class Note {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String note; 

}
