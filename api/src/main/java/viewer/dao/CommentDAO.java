package viewer.dao;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import viewer.model.Comment;

import java.util.List;

import static org.hibernate.criterion.Restrictions.eq;

/**
 * Created by employee on 12/6/16.
 */
@Repository
public class CommentDAO {

    @Autowired
    SessionFactory sessionFactory;

    public List<Comment> getCommentsFromPost(Integer postId){
        Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Comment.class)
                .add(eq("postId", postId));
        return criteria.list();
    }

    public void deleteComment(Integer id){
        Session session = sessionFactory.getCurrentSession();
        Criteria criteria = session.createCriteria(Comment.class)
                .add(eq("id", id));
        Comment comment = (Comment) criteria.uniqueResult();
        session.delete(comment);
    }
}
