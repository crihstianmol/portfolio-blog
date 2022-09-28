import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { makeid } from '../modules/Misc';

function BlogList({ blogs }) {
    const nxRouter = useRouter();
    const [isSearched, setisSearched] = useState(false)
    const setBlog = (blog = {}) => {
        if (blog.id) {
            setisSearched(false)
            nxRouter.push("/blog/" + blog.title.replaceAll(' ', '-'))
        }
    }

    const [pageLang, setPageLan] = useState('EN')
    useEffect(() => {
        window.scrollTo(0, 0)
        if (blogs.length > 0) {
            setisSearched(true)
        }
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);
    return (
        <>
            <section key={makeid(50)} className='total-blog'>
                <div key={makeid(50)} className='load-container' style={{ display: isSearched ? 'none' : 'block' }}>
                    <div key={makeid(50)} className='load-circle'></div>
                </div>
                <div key={makeid(50)} className='load-percent' style={{ display: isSearched ? 'none' : 'block' }}>
                    <h3 key={makeid(50)}>{pageLang === "ES" ? (<>Cargando Blog</>) : (<>Loading Blog</>)}</h3>
                </div>
                {pageLang === "ES" ? (<>
                    <section key={makeid(50)} style={{ display: isSearched ? 'block' : 'none' }} className="blogposts">
                        <h3 key={makeid(50)}>Blog</h3>                        
                        <section key={makeid(50)} className="blogs-container">
                            {
                                blogs.map((value) => {
                                    return (
                                        <div key={makeid(50)} onClick={() => { setBlog(value); }} style={{ display: value.id ? "block" : "none" }} className='blog' title={value.id}>
                                            <div key={makeid(50)} title={value.title}>
                                                <img key={makeid(50)} src={value.imgsrc + '&width=250'} alt={value.title} >
                                                </img>
                                                <div key={makeid(50)} className='blog-title'>
                                                    <b key={makeid(50)}>{value.emoji + ' ' + value.title}</b>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </section>
                </>) : (<>
                    <section key={makeid(50)} style={{ display: isSearched ? 'block' : 'none' }} className="blogposts">
                        <h3 key={makeid(50)}>Blog</h3>
                        <section key={makeid(50)} className="blogs-container">
                            {
                                blogs.map((value) => {
                                    return (
                                        <div key={makeid(50)} onClick={() => { setBlog(value); }} style={{ display: value.id ? "block" : "none" }} className='blog' title={value.id}>
                                            <div key={makeid(50)} title={value.title}>
                                                <img key={makeid(50)} src={value.imgsrc + '&width=250'} alt={value.title} >
                                                </img>
                                                <div key={makeid(50)} className='blog-title'>
                                                    <b key={makeid(50)}>{value.emoji + ' ' + value.title}</b>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </section>
                </>)}

            </section>
        </>
    );
}

export default BlogList;
