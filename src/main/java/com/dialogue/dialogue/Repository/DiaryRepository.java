package com.dialogue.dialogue.Repository;

import com.dialogue.dialogue.Entity.Diary;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface DiaryRepository {
    Diary save(Diary diary);
    Optional<Diary> findById(Long id);
    Optional<Diary> findByFeeling(String feeling);
    Optional<Diary> findByWeather(String weather);
    Optional<Diary> findByDate(String date);
    Optional<Diary> findByDiaryTitle(String diaryTitle);
    Optional<Diary> findByDiaryText(String diaryText);
    List<Diary> findAll();
}