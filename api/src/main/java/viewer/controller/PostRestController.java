package viewer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import viewer.model.Post;
import viewer.service.PostService;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Controller
@RequestMapping("/api/post")
public class PostRestController {

    @Autowired
    PostService postService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody Post getPostById(@PathVariable("id")Integer id){
        return postService.getPostById(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @RequestMapping(value = "/{id}/like", method = RequestMethod.PATCH)
    @ResponseBody String addLike(@PathVariable("id")Integer id){
        postService.addLike(id);
        return "";
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody String deletePost(@PathVariable("id")Integer id){
        postService.deletePost(id);
        return "";
    }

    @RequestMapping(value = "/best", method = RequestMethod.GET)
    @ResponseBody Post getBestPost(){
        return postService.getBestPost();
    }


}
