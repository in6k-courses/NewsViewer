package viewer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import viewer.model.Comment;
import viewer.service.CommentService;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Controller
@RequestMapping("/api/comment")
public class CommentRestController {

    @Autowired
    CommentService commentService;

    @RequestMapping(value = "/{postId}", method = RequestMethod.GET)
    @ResponseBody List<Comment> getCommentsFromPost(@PathVariable("postId")Integer id){
        return commentService.getCommentFromPost(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody Comment deleteComment(@PathVariable("id")Integer id){
        commentService.deleteComment(id);
        return null;
    }
}
