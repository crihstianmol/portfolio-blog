import NavRouter from "../../components/NavRouter";
import BlogViewer from "../../components/BlogViewer";
import { getBlogs, getBlog } from '../../modules/GraphQuerys';

const Blog = ({ blog }) => {
    const indexHeaderProps = {
        title: blog != undefined ? blog.title : undefined,
        description: blog != undefined ? blog.paragraphList[0].paragraph[0].text : undefined,
        image: blog != undefined ? blog.imgsrc : undefined
    }

    return (
        <>
            <NavRouter headerprops={indexHeaderProps}>
                <BlogViewer BlogPost={blog != undefined ? blog.paragraphList : []} blog={blog} blogError={blog == undefined}></BlogViewer>
            </NavRouter>
        </>)

}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const blogTitle = '' + context.params.blog.toString()
    const blogs = await getBlogs();
    const blog = blogs.filter((val) => {
        return val.title.toLowerCase() == blogTitle.replaceAll('-', ' ').toLowerCase()
    })[0]
    blog.paragraphList = await getBlog(blog.id)

    return { props: { blog } }
}

export default Blog
