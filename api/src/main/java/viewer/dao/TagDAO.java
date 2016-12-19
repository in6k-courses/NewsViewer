package viewer.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import viewer.model.Post;
import viewer.model.Tag;

import java.util.List;

import static org.hibernate.criterion.Restrictions.eq;

/**
 * Created by employee on 12/6/16.
 */
@Repository
public class TagDAO {

    @Autowired
    SessionFactory sessionFactory;

    public List<Tag> getAllTags(){
        List<Tag> tags = sessionFactory.getCurrentSession().createCriteria(Tag.class).list();
        for (Tag tag : tags) {
            tag.getPosts().forEach(Post::getTitle);
        }
        return tags;
    }

    public Tag createTag(String title){
        Session session = sessionFactory.getCurrentSession();
        Tag tag = new Tag(title);
        session.save(tag);
        return tag;
    }

    public void deleteTag(Integer id) {
        Session session = sessionFactory.getCurrentSession();
        Tag tag = (Tag) session.createCriteria(Tag.class).add(eq("id", id)).uniqueResult();
        session.delete(tag);
    }
}
