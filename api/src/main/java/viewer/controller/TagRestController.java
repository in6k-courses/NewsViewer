package viewer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import viewer.model.Tag;
import viewer.service.TagService;

import java.util.List;

/**
 * Created by yurik on 07.12.16.
 */
@Controller
@RequestMapping("/api/tag")
public class TagRestController {

    @Autowired
    TagService tagService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    @ResponseBody List<Tag> getAllTags(){
        return tagService.getAllTags();
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody String createTag(@RequestBody()Tag tag){
        tagService.createTag(tag.getTitle());
        return "";
    }
}
