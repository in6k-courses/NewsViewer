package viewer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import viewer.dao.PostDAO;
import viewer.model.Post;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Service
@Transactional
public class PostService {

    @Autowired
    PostDAO postDAO;


    public Post getPostById(Integer id) {
        return postDAO.getPostById(id);
    }

    public void addLike(Integer id) {
        postDAO.addLike(id);
    }

    public void deletePost(Integer id) {
        postDAO.deletePost(id);
    }


    public List<Post> getAllPosts() {
        return postDAO.getAll();
    }

    public Post getBestPost() {
        return postDAO.getBestPost();
    }
}
