package com.dialogue.dialogue.Service;

import com.dialogue.dialogue.Entity.Diary;
import com.dialogue.dialogue.Repository.DiaryRepository;
import com.dialogue.dialogue.Repository.MemoryDiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/*@Service*/
public class DiaryService {

    private final DiaryRepository diaryRepository;

/*    @Autowired*/
    public DiaryService(DiaryRepository diaryRepository) {
        this.diaryRepository = diaryRepository;
    }

    /**
     * 저장기능
     */
    public Long DiarySave(Diary diary){
        diaryRepository.save(diary);
        return diary.getId();
    }

    public Optional<Diary> findOne(Long diaryId){
        return diaryRepository.findById(diaryId);
    }
}
