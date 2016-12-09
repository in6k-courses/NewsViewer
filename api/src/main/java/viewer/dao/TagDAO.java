package viewer.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import viewer.model.Tag;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Repository
public class TagDAO {

    @Autowired
    SessionFactory sessionFactory;

    public List<Tag> getAllTags(){
        return sessionFactory.getCurrentSession().createCriteria(Tag.class).list();
    }

    public Tag createTag(String title){
        Session session = sessionFactory.getCurrentSession();
        Tag tag = new Tag(title);
        session.save(tag);
        return tag;
    }
}
