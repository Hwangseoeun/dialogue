package com.dialogue.dialogue.Controller;

import com.dialogue.dialogue.Repository.DiaryRepository;
import com.dialogue.dialogue.Service.DiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class DiaryController {

    private final DiaryService diaryService;

    @Autowired
    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }
}