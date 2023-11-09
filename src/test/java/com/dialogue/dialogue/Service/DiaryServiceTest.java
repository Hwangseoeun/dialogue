package com.dialogue.dialogue.Service;

import com.dialogue.dialogue.Entity.Diary;
import com.dialogue.dialogue.Repository.MemoryDiaryRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DiaryServiceTest {

    DiaryService diaryService;
    MemoryDiaryRepository diaryRepository;

    @BeforeEach
    public void beforeEach(){
        diaryRepository = new MemoryDiaryRepository();
        diaryService = new DiaryService(diaryRepository);
    }

    @AfterEach
    public void afterEach(){
        diaryRepository.clearStore();
    }

    @Test
    void diarySave() {
        Diary diary = new Diary();
        diary.setDiaryTitle("즐거운 하루..");
        diary.setDiaryText("오늘은 ~했다.");
        diary.setWeather("https://www.sun");
        diary.setFeeling("https://www.bad");

        Long saveId = diaryService.DiarySave(diary);

    }

    @Test
    void findOne() {
    }
}