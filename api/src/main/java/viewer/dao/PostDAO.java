package viewer.dao;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import viewer.model.Post;

import java.util.List;

import static org.hibernate.criterion.Restrictions.eq;

/**
 * Created by employee on 12/6/16.
 */
@Repository
public class PostDAO {

    @Autowired
    SessionFactory sessionFactory;

    public Post getPostById(Integer id){
        Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Post.class)
                .add(eq("id", id));
        return (Post) criteria.uniqueResult();
    }

    public void addLike(Integer postId){
        Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Post.class)
                .add(eq("id", postId));
        Post post = (Post) criteria.uniqueResult();
        post.setLikes(post.getLikes() + 1);
        sessionFactory.getCurrentSession().save(post);
    }

    public void deletePost(Integer id){
        Session session = sessionFactory.getCurrentSession();
        Criteria criteria = session.createCriteria(Post.class).add(eq("id", id));
        Post post = (Post) criteria.uniqueResult();
        session.delete(post);
    }

    public Post getBestPost(){
        DetachedCriteria maxLikes = DetachedCriteria.forClass(Post.class)
                .setProjection( Projections.max("likes") );
        Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Post.class)
                .add(Property.forName("likes").eq(maxLikes));
        return (Post) criteria.uniqueResult();
    }

    public void createPost(String title, Integer tagId){
        Session session = sessionFactory.getCurrentSession();
        Post post = new Post();
        post.setTitle(title);

//        Tag tag = (Tag) session.createCriteria(Tag.class).add(eq("id", tagId)).uniqueResult();
//        post.addTags(tag);
        session.save(post);
    }

    public List<Post> getAll() {
        return sessionFactory.getCurrentSession().createCriteria(Post.class).list();
    }
}
