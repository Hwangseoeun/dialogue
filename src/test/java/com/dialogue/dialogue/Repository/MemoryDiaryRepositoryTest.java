package com.dialogue.dialogue.Repository;

import com.dialogue.dialogue.Entity.Diary;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

class MemoryDiaryRepositoryTest {

    MemoryDiaryRepository repository = new MemoryDiaryRepository();

    @AfterEach
    public void afterEach(){
        repository.clearStore();
    }
    //각 Test가 끝난 후 이 부분으로 돌아가기
    //서로 의존관계 없이 Test가 진행되어야 함

    @Test
    public void save(){
        Diary diary = new Diary();
        diary.setDiaryTitle("오늘은..");
        diary.setDiaryText("누가 누가 잘하나");
        diary.setFeeling("https://www.naver.com");
        diary.setWeather("https://www.daum.net");

        repository.save(diary);

        Diary result = repository.findById(diary.getId()).get();
        /*System.out.println("result = " + (result == diary));*/
        /*Assertions.assertEquals(diary, result);*/
        assertThat(diary).isEqualTo(result);
    }

    @Test
    public void findByFeeling(){
        Diary diary1 = new Diary();
        diary1.setFeeling("https://todo");
        repository.save(diary1);

        Diary diary2 = new Diary();
        diary2.setFeeling("https://callender");
        repository.save(diary2);

        Diary result = repository.findByFeeling("https://todo").get();

        assertThat(result).isEqualTo(diary1);
    }

    @Test
    public void findByWeather(){
        Diary diary1 = new Diary();
        diary1.setWeather("https://sun");
        repository.save(diary1);

        Diary diary2 = new Diary();
        diary2.setWeather("https://rain");
        repository.save(diary2);

        Diary result = repository.findByWeather("https://sun").get();

        assertThat(result).isEqualTo(diary1);
    }

    @Test
    public void findByDiaryTitle(){
        Diary diary1 = new Diary();
        diary1.setDiaryTitle("hello1");
        repository.save(diary1);

        Diary diary2 = new Diary();
        diary2.setDiaryTitle("hello2");
        repository.save(diary2);

        Diary result = repository.findByDiaryTitle("hello1").get();

        assertThat(result).isEqualTo(diary1);
    }

    @Test
    public void findByDiaryText(){
        Diary diary1 = new Diary();
        diary1.setDiaryText("hello1");
        repository.save(diary1);

        Diary diary2 = new Diary();
        diary2.setDiaryText("hello2");
        repository.save(diary2);

        Diary result = repository.findByDiaryText("hello1").get();

        assertThat(result).isEqualTo(diary1);
    }

    @Test
    public void findAll(){
        Diary diary1 = new Diary();
        diary1.setFeeling("https://todo");
        repository.save(diary1);

        Diary diary2 = new Diary();
        diary2.setFeeling("https://callender");
        repository.save(diary2);

        List<Diary> result = repository.findAll();

        assertThat(result.size()).isEqualTo(2);
    }

}
