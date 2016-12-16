package viewer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import viewer.model.Post;
import viewer.service.PostService;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Controller
@RequestMapping("/api/posts")
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
    @ResponseBody Post addLike(@PathVariable("id")Integer id){
        return postService.addLike(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody Post deletePost(@PathVariable("id")Integer id){
        postService.deletePost(id);
        return null;
    }

    @RequestMapping(value = "/best", method = RequestMethod.GET)
    @ResponseBody Post getBestPost(){
        return postService.getBestPost();
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody String createPost(@RequestBody()Post post){
        postService.createPost(post.getTitle());
        return "";
    }

}
