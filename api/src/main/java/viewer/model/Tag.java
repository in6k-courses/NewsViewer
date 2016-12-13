package viewer.model;


import javax.persistence.*;
import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Entity
@Table(name = "tags")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "t_id", nullable = false)
    private Integer id;

    @Column(name = "title", nullable = false)
    private String title;

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "tag_post", catalog = "news_viewer", joinColumns = {
            @JoinColumn(name = "t_id", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "p_id",
                    nullable = false, updatable = false) })
    private List<Post> posts;

    public Tag(String title) {
        this.title = title;
    }

    public Tag() {
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
}
