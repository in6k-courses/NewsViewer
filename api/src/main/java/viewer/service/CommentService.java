package viewer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import viewer.dao.CommentDAO;
import viewer.model.Comment;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Service
@Transactional
public class CommentService {

    @Autowired
    CommentDAO commentDAO;


    public List<Comment> getCommentFromPost(Integer id) {
        return commentDAO.getCommentsFromPost(id);
    }

    public void deleteComment(Integer id) {
        commentDAO.deleteComment(id);
    }
}
