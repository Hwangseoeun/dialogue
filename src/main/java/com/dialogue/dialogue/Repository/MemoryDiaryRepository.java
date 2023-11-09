package com.dialogue.dialogue.Repository;

import com.dialogue.dialogue.Entity.Diary;
import org.springframework.stereotype.Repository;

import java.util.*;

/*@Repository*/
public class MemoryDiaryRepository implements DiaryRepository{

    private static Map<Long, Diary> store = new HashMap<>();
    private static long sequence = 0L;

    @Override
    public Diary save(Diary diary) {
        diary.setId(++sequence);
        store.put(diary.getId(), diary);
        return diary;
    }

    @Override
    public Optional<Diary> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Diary> findByFeeling(String feeling) {
        return store.values().stream()
                .filter(diary -> diary.getFeeling().equals(feeling))
                .findAny();
    }

    @Override
    public Optional<Diary> findByWeather(String weather) {
        return store.values().stream()
                .filter(diary -> diary.getWeather().equals(weather))
                .findAny();
    }

    @Override
    public Optional<Diary> findByDate(String date) {
        return store.values().stream()
                .filter(diary -> diary.getDate().equals(date))
                .findAny();
    }

    @Override
    public Optional<Diary> findByDiaryTitle(String diaryTitle) {
        return store.values().stream()
                .filter(diary -> diary.getDiaryTitle().equals(diaryTitle))
                .findAny();
    }

    @Override
    public Optional<Diary> findByDiaryText(String diaryText) {
        return store.values().stream()
                .filter(diary -> diary.getDiaryText().equals(diaryText))
                .findAny();
    }

    @Override
    public List<Diary> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore(){
        store.clear();
    }
}
