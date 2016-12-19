package viewer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import viewer.model.Comment;
import viewer.service.CommentService;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@RestController
@RequestMapping("/api/comment")
public class CommentRestController {

    @Autowired
    CommentService commentService;

    @RequestMapping(value = "/{postId}", method = RequestMethod.GET)
    @ResponseBody List<Comment> getCommentsFromPost(@PathVariable("postId")Integer id){
        return commentService.getCommentFromPost(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody Comment createComment(@RequestBody()Comment comment){
        return commentService.createComment(comment);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody Comment deleteComment(@PathVariable("id")Integer id){
        commentService.deleteComment(id);
        return null;
    }
}
