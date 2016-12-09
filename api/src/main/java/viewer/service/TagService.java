package viewer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import viewer.dao.TagDAO;
import viewer.model.Tag;

import java.util.List;

/**
 * Created by yurik on 07.12.16.
 */
@Repository
@Transactional
public class TagService {

    @Autowired
    TagDAO tagDAO;


    public List<Tag> getAllTags() {
        return tagDAO.getAllTags();
    }

    public Tag createTag(String title) {
       return tagDAO.createTag(title);
    }
}
