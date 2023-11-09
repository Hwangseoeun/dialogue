package com.dialogue.dialogue.Controller;

import com.dialogue.dialogue.Entity.Diary;
import com.dialogue.dialogue.Repository.DiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
@Controller
public class MainDiaryController {

    @PostMapping("/diary")
    public String diary(){
        return "diary";
    }
}*/
/*@RestController
@RequestMapping("/main")
public class MainDiaryController {

    @PostMapping("/diary")
    public String diary(){
        return "diary";
    }
}*/
/*@RestController
@CrossOrigin
@RequestMapping("/main")
public class MainDiaryController {

    @RequestMapping(path = "/diary", method = RequestMethod.GET)
    public String testGetMethod2(){
        return "get2";
    }
}*/
@RestController
@RequestMapping("/main/diary")
public class MainDiaryController {
    private final DiaryRepository diaryRepository;

    public MainDiaryController(DiaryRepository diaryRepository) {
        this.diaryRepository = diaryRepository;
    }

    @GetMapping
    public List<Diary> getAllDiaries() {
        return diaryRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createDiary(@RequestBody Diary diary) {
        try {
            // 예시: DiaryRequest 클래스는 요청 바디와 일치하는 DTO 클래스입니다.
            // 필요한 DTO 클래스를 정의하고 사용하세요.

            Diary newDiary = new Diary();
            newDiary.setFeeling(diary.getFeeling());
            newDiary.setWeather(diary.getWeather());
            newDiary.setDate(diary.getDate());
            newDiary.setDiaryTitle(diary.getDiaryTitle());
            newDiary.setDiaryText(diary.getDiaryText());

            Diary savedDiary = diaryRepository.save(newDiary);
            return new ResponseEntity<>(savedDiary, HttpStatus.CREATED);
        } catch (Exception e) {
            // 예외 발생 시 처리
            return new ResponseEntity<>("Error creating diary: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
