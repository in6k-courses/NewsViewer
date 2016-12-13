package viewer.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Entity
@Table(name = "post")
public class Post {

    @Id
    @Column(name = "p_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "likes")
    private Integer likes;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "post")
    private List<Comment> comments;

//    @JsonIgnore
//    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "posts")
//    private List<Tag> tags ;

    public Post() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
