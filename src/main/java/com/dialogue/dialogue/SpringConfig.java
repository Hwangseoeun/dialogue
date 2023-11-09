package com.dialogue.dialogue;

import com.dialogue.dialogue.Repository.DiaryRepository;
import com.dialogue.dialogue.Repository.MemoryDiaryRepository;
import com.dialogue.dialogue.Service.DiaryService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {

    @Bean
    public DiaryService diaryService(){
        return new DiaryService(diaryRepository());
    }

    @Bean
    public DiaryRepository diaryRepository(){
        return new MemoryDiaryRepository();
    }
}
