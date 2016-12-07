package viewer.model;


import javax.persistence.*;

/**
 * Created by employee on 12/6/16.
 */
@Entity
@Table(name = "tags")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "title", nullable = false)
    private String title;

//    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinTable(name = "tag_post", catalog = "news_viewer", joinColumns = {
//            @JoinColumn(name = "id", nullable = false, updatable = false) },
//            inverseJoinColumns = { @JoinColumn(name = "id",
//                    nullable = false, updatable = false) })
//    private List<Post> posts;

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
