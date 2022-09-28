import NavRouter from "../components/NavRouter";
import BlogList from "../components/BlogList";
import { getBlogs } from '../modules/GraphQuerys';
import { useState, useEffect } from 'react';

const Index = ({ blogs }) => {
    const [pageLang, setPageLan] = useState('EN')
    useEffect(() => {
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);

    const indexHeaderProps = {
        title: "Blog",
        description: pageLang == 'ES' ? 'Este es mi Blog, aquí podrás encontrar algunas de mis ideas, información y consejos acerca de desarrollo, programación y crecimiento profesional.' : 'This is my Blog, here you can find some of my ideas, information and tips about development, programming and professional growth.',
        image: '../static/images/blog-img.jpg'
    }
    return (
        <>
            <NavRouter headerprops={indexHeaderProps}>
                <BlogList blogs={blogs}></BlogList>
            </NavRouter>
        </>
    )

}

export async function getServerSideProps() {
    // Fetch data from external API
    const blogs = await getBlogs();
    // Pass data to the page via props
    return { props: { blogs } }
}

export default Index