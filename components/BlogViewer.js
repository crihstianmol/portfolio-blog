import { useState, useEffect } from 'react';
import Code from 'react-code-prettify';
import { makeid } from '../modules/Misc';
import { useRouter } from 'next/router';
function BlogViewer({ BlogPost, blog, blogError }) {
    const nxRouter = useRouter();
    const [pageLang, setPageLan] = useState('EN')
    const [BackToBlog, setBackToBlog] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);

    const comeBackToBlogs = () => {
        setBackToBlog(true)
        nxRouter.push("/")
    }
    useEffect(() => {
        if (blogError) {
            setTimeout(() => {
                nxRouter.push("/")
            }, 5000);
        }
    }, [blogError])
    return (
        <>
            {
                blogError ? (
                    <>
                        <section className='total-blog'>
                            <div key={makeid(6)} className='load-percent'>
                                <h3>{pageLang === "ES" ? (<>Este post no existe 😕</>) : (<>This post doesn't exist 😕</>)}</h3>
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        {
                            BlogPost.length === 0 || BackToBlog ? (
                                <>
                                    <section className='total-blog'>
                                        <div key={makeid(6)} className='load-container'>
                                            <div key={makeid(6)} className='load-circle'></div>
                                        </div>
                                        <div key={makeid(6)} className='load-percent'>
                                            <h3>{pageLang === "ES" ? (<>Cargando Blog...</>) : (<>Loading Blog...</>)}</h3>
                                        </div>
                                    </section>
                                </>
                            ) : (
                                <>
                                    <section className='total-blog'>
                                        <section className="blogposts">
                                            <section className="blog-container">
                                                <article>
                                                    <h2>{`${blog.emoji} ${blog.title}`}</h2>
                                                    <div key={makeid(6)}>
                                                        <img src={`${blog.imgsrc}`} className="blog-image" alt='Post'></img>
                                                    </div>
                                                    {
                                                        BlogPost.map((value) => {
                                                            let jxStringArray = []
                                                            let jxString = undefined
                                                            return (
                                                                <div key={makeid(6)}>
                                                                    {
                                                                        value.paragraph !== null && value.paragraph !== undefined ? (
                                                                            <p key={makeid(6)}>
                                                                                <>
                                                                                    {
                                                                                        value.paragraph.map((element,) => {
                                                                                            // jxString.key=makeid(6)
                                                                                            if (jxString !== undefined) {
                                                                                                if (element.hasurl) {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}><i key={makeid(6)}><u key={makeid(6)}>{element.text}</u></i></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}><i key={makeid(6)}>{element.text}</i></strong></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}><u key={makeid(6)}>{element.text}</u></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}>{element.text}</strong></a>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i key={makeid(6)}><u key={makeid(6)}>{element.text}</u></i></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i key={makeid(6)}>{element.text}</i></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><u key={makeid(6)}>{element.text}</u></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'>{element.text}</a>
                                                                                                            }
                                                                                                        }
                                                                                                    }

                                                                                                } else {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong key={makeid(6)}><i key={makeid(6)}><u key={makeid(6)}>{element.text}</u></i></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong key={makeid(6)}><i key={makeid(6)}>{element.text}</i></strong>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong key={makeid(6)}><u key={makeid(6)}>{element.text}</u></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong key={makeid(6)}>{element.text}</strong>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <i key={makeid(6)}><u key={makeid(6)}>{element.text}</u></i>
                                                                                                            } else {
                                                                                                                jxString = <i key={makeid(6)}>{element.text}</i>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <u key={makeid(6)}>{element.text}</u>
                                                                                                            } else {
                                                                                                                jxString = element.text
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            } else {
                                                                                                if (element.hasurl) {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}><i key={makeid(6)}><u key={makeid(6)}>{element.text}</u></i></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}><i key={makeid(6)}>{element.text}</i></strong></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}><u key={makeid(6)}>{element.text}</u></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}>{element.text}</strong></a>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i key={makeid(6)}><u key={makeid(6)}>{element.text}</u></i></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i key={makeid(6)}>{element.text}</i></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><u key={makeid(6)}>{element.text}</u></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'>{element.text}</a>
                                                                                                            }
                                                                                                        }
                                                                                                    }

                                                                                                } else {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong key={makeid(6)}><i key={makeid(6)}><u key={makeid(6)}>{element.text}</u></i></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong key={makeid(6)}><i key={makeid(6)}>{element.text}</i></strong>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong key={makeid(6)}><u key={makeid(6)}>{element.text}</u></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong key={makeid(6)}>{element.text}</strong>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <i key={makeid(6)}><u key={makeid(6)}>{element.text}</u></i>
                                                                                                            } else {
                                                                                                                jxString = <i key={makeid(6)}>{element.text}</i>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <u key={makeid(6)}>{element.text}</u>
                                                                                                            } else {
                                                                                                                jxString = element.text
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            if (element.list) {
                                                                                                if (jxStringArray.length === 0) {
                                                                                                    jxStringArray.push(jxString)
                                                                                                    jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                    jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                } else {
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                        jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                    }
                                                                                                }
                                                                                                element.childs.forEach(childelement => {
                                                                                                    if (childelement.hasurl) {
                                                                                                        if (childelement.annotations.bold) {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}><i key={makeid(6)}><u key={makeid(6)}>{childelement.text}</u></i></strong></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}><i key={makeid(6)}>{childelement.text}</i></strong></a></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}><u key={makeid(6)}>{childelement.text}</u></strong></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong key={makeid(6)}>{childelement.text}</strong></a></li>
                                                                                                                }
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><i key={makeid(6)}><u key={makeid(6)}>{childelement.text}</u></i></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><i key={makeid(6)}>{childelement.text}</i></a></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><u key={makeid(6)}>{childelement.text}</u></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'>{childelement.text}</a></li>
                                                                                                                }
                                                                                                            }
                                                                                                        }

                                                                                                    } else {
                                                                                                        if (childelement.annotations.bold) {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><strong key={makeid(6)}><i key={makeid(6)}><u key={makeid(6)}>{childelement.text}</u></i></strong></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><strong key={makeid(6)}><i key={makeid(6)}>{childelement.text}</i></strong></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><strong key={makeid(6)}><u key={makeid(6)}>{childelement.text}</u></strong></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><strong key={makeid(6)}>{childelement.text}</strong></li>
                                                                                                                }
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><i key={makeid(6)}><u key={makeid(6)}>{childelement.text}</u></i></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><i key={makeid(6)}>{childelement.text}</i></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><u key={makeid(6)}>{childelement.text}</u></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} >{childelement.text}</li>
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            return jxStringArray.length !== 0 ? jxStringArray : jxString
                                                                                        })
                                                                                    }
                                                                                </>
                                                                            </p>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.header1 !== null && value.header1 !== undefined ? (
                                                                            <p key={makeid(6)}>
                                                                                <>
                                                                                    {
                                                                                        value.header1.map((element,) => {
                                                                                            if (jxString !== undefined) {
                                                                                                if (element.hasurl) {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i><u>{element.text}</u></i></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i>{element.text}</i></strong></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><u>{element.text}</u></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong>{element.text}</strong></a>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i><u>{element.text}</u></i></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i>{element.text}</i></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><u>{element.text}</u></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'>{element.text}</a>
                                                                                                            }
                                                                                                        }
                                                                                                    }

                                                                                                } else {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong key={makeid(6)}><i><u>{element.text}</u></i></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong key={makeid(6)}><i>{element.text}</i></strong>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong key={makeid(6)}><u>{element.text}</u></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong key={makeid(6)}>{element.text}</strong>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <i key={makeid(6)}><u>{element.text}</u></i>
                                                                                                            } else {
                                                                                                                jxString = <i key={makeid(6)}>{element.text}</i>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <u key={makeid(6)}>{element.text}</u>
                                                                                                            } else {
                                                                                                                jxString = element.text
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            } else {
                                                                                                if (element.hasurl) {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i><u>{element.text}</u></i></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i>{element.text}</i></strong></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><u>{element.text}</u></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong>{element.text}</strong></a>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i><u>{element.text}</u></i></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i>{element.text}</i></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><u>{element.text}</u></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'>{element.text}</a>
                                                                                                            }
                                                                                                        }
                                                                                                    }

                                                                                                } else {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong key={makeid(6)}><i><u>{element.text}</u></i></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong key={makeid(6)}><i>{element.text}</i></strong>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong key={makeid(6)}><u>{element.text}</u></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong key={makeid(6)}>{element.text}</strong>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <i key={makeid(6)}><u>{element.text}</u></i>
                                                                                                            } else {
                                                                                                                jxString = <i key={makeid(6)}>{element.text}</i>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <u key={makeid(6)}>{element.text}</u>
                                                                                                            } else {
                                                                                                                jxString = element.text
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            if (element.list) {
                                                                                                if (jxStringArray.length === 0) {
                                                                                                    jxStringArray.push(jxString)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                } else {
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                }
                                                                                                element.childs.forEach(childelement => {
                                                                                                    if (childelement.hasurl) {
                                                                                                        if (childelement.annotations.bold) {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong><i><u>{childelement.text}</u></i></strong></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong><i>{childelement.text}</i></strong></a></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong><u>{childelement.text}</u></strong></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong>{childelement.text}</strong></a></li>
                                                                                                                }
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><i><u>{childelement.text}</u></i></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><i>{childelement.text}</i></a></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><u>{childelement.text}</u></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'>{childelement.text}</a></li>
                                                                                                                }
                                                                                                            }
                                                                                                        }

                                                                                                    } else {
                                                                                                        if (childelement.annotations.bold) {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><strong><i><u>{childelement.text}</u></i></strong></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><strong><i>{childelement.text}</i></strong></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><strong><u>{childelement.text}</u></strong></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><strong>{childelement.text}</strong></li>
                                                                                                                }
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><i><u>{childelement.text}</u></i></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><i>{childelement.text}</i></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><u>{childelement.text}</u></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} >{childelement.text}</li>
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            return jxStringArray.length !== 0 ? jxStringArray : jxString
                                                                                        })
                                                                                    }
                                                                                </>
                                                                            </p>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.header2 !== null && value.header2 !== undefined ? (
                                                                            <p key={makeid(6)}>
                                                                                <>
                                                                                    {
                                                                                        value.header2.map((element,) => {
                                                                                            if (jxString !== undefined) {
                                                                                                if (element.hasurl) {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i><u>{element.text}</u></i></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i>{element.text}</i></strong></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><u>{element.text}</u></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong>{element.text}</strong></a>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i><u>{element.text}</u></i></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i>{element.text}</i></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><u>{element.text}</u></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'>{element.text}</a>
                                                                                                            }
                                                                                                        }
                                                                                                    }

                                                                                                } else {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong><i><u>{element.text}</u></i></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong><i>{element.text}</i></strong>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong><u>{element.text}</u></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong>{element.text}</strong>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <i><u>{element.text}</u></i>
                                                                                                            } else {
                                                                                                                jxString = <i>{element.text}</i>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <u>{element.text}</u>
                                                                                                            } else {
                                                                                                                jxString = element.text
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            } else {
                                                                                                if (element.hasurl) {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i><u>{element.text}</u></i></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i>{element.text}</i></strong></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><u>{element.text}</u></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong>{element.text}</strong></a>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i><u>{element.text}</u></i></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i>{element.text}</i></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><u>{element.text}</u></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'>{element.text}</a>
                                                                                                            }
                                                                                                        }
                                                                                                    }

                                                                                                } else {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong><i><u>{element.text}</u></i></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong><i>{element.text}</i></strong>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong><u>{element.text}</u></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong>{element.text}</strong>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <i><u>{element.text}</u></i>
                                                                                                            } else {
                                                                                                                jxString = <i>{element.text}</i>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <u>{element.text}</u>
                                                                                                            } else {
                                                                                                                jxString = element.text
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            if (element.list) {
                                                                                                if (jxStringArray.length === 0) {
                                                                                                    jxStringArray.push(jxString)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                } else {
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                }
                                                                                                element.childs.forEach(childelement => {
                                                                                                    if (childelement.hasurl) {
                                                                                                        if (childelement.annotations.bold) {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong><i><u>{childelement.text}</u></i></strong></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong><i>{childelement.text}</i></strong></a></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong><u>{childelement.text}</u></strong></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong>{childelement.text}</strong></a></li>
                                                                                                                }
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><i><u>{childelement.text}</u></i></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><i>{childelement.text}</i></a></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><u>{childelement.text}</u></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'>{childelement.text}</a></li>
                                                                                                                }
                                                                                                            }
                                                                                                        }

                                                                                                    } else {
                                                                                                        if (childelement.annotations.bold) {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><strong><i><u>{childelement.text}</u></i></strong></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><strong><i>{childelement.text}</i></strong></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><strong><u>{childelement.text}</u></strong></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><strong>{childelement.text}</strong></li>
                                                                                                                }
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><i><u>{childelement.text}</u></i></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><i>{childelement.text}</i></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><u>{childelement.text}</u></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} >{childelement.text}</li>
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            return jxStringArray.length !== 0 ? jxStringArray : jxString
                                                                                        })
                                                                                    }
                                                                                </>
                                                                            </p>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.header3 !== null && value.header3 !== undefined ? (
                                                                            <p key={makeid(6)}>
                                                                                <>
                                                                                    {
                                                                                        value.header3.map((element,) => {
                                                                                            if (jxString !== undefined) {
                                                                                                if (element.hasurl) {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i><u>{element.text}</u></i></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i>{element.text}</i></strong></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><u>{element.text}</u></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong>{element.text}</strong></a>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i><u>{element.text}</u></i></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i>{element.text}</i></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><u>{element.text}</u></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'>{element.text}</a>
                                                                                                            }
                                                                                                        }
                                                                                                    }

                                                                                                } else {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong><i><u>{element.text}</u></i></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong><i>{element.text}</i></strong>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong><u>{element.text}</u></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong>{element.text}</strong>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <i><u>{element.text}</u></i>
                                                                                                            } else {
                                                                                                                jxString = <i>{element.text}</i>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <u>{element.text}</u>
                                                                                                            } else {
                                                                                                                jxString = element.text
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            } else {
                                                                                                if (element.hasurl) {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i><u>{element.text}</u></i></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><i>{element.text}</i></strong></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong><u>{element.text}</u></strong></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><strong>{element.text}</strong></a>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i><u>{element.text}</u></i></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><i>{element.text}</i></a>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'><u>{element.text}</u></a>
                                                                                                            } else {
                                                                                                                jxString = <a key={makeid(6)} className="special-text" href={element.url} target="_blank" rel='noreferrer'>{element.text}</a>
                                                                                                            }
                                                                                                        }
                                                                                                    }

                                                                                                } else {
                                                                                                    if (element.annotations.bold) {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong><i><u>{element.text}</u></i></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong><i>{element.text}</i></strong>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <strong><u>{element.text}</u></strong>
                                                                                                            } else {
                                                                                                                jxString = <strong>{element.text}</strong>
                                                                                                            }
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (element.annotations.italic) {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <i><u>{element.text}</u></i>
                                                                                                            } else {
                                                                                                                jxString = <i>{element.text}</i>
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (element.annotations.underline) {
                                                                                                                jxString = <u>{element.text}</u>
                                                                                                            } else {
                                                                                                                jxString = element.text
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            if (element.list) {
                                                                                                if (jxStringArray.length === 0) {
                                                                                                    jxStringArray.push(jxString)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                } else {
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                }
                                                                                                element.childs.forEach(childelement => {
                                                                                                    if (childelement.hasurl) {
                                                                                                        if (childelement.annotations.bold) {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong><i><u>{childelement.text}</u></i></strong></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong><i>{childelement.text}</i></strong></a></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong><u>{childelement.text}</u></strong></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><strong>{childelement.text}</strong></a></li>
                                                                                                                }
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><i><u>{childelement.text}</u></i></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><i>{childelement.text}</i></a></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'><u>{childelement.text}</u></a></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><a key={makeid(6)} className="special-text" href={childelement.url} target="_blank" rel='noreferrer'>{childelement.text}</a></li>
                                                                                                                }
                                                                                                            }
                                                                                                        }

                                                                                                    } else {
                                                                                                        if (childelement.annotations.bold) {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><strong><i><u>{childelement.text}</u></i></strong></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><strong><i>{childelement.text}</i></strong></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><strong><u>{childelement.text}</u></strong></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><strong>{childelement.text}</strong></li>
                                                                                                                }
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (childelement.annotations.italic) {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><i><u>{childelement.text}</u></i></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} ><i>{childelement.text}</i></li>
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (childelement.annotations.underline) {
                                                                                                                    jxString = <li key={makeid(6)} ><u>{childelement.text}</u></li>
                                                                                                                } else {
                                                                                                                    jxString = <li key={makeid(6)} >{childelement.text}</li>
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            return jxStringArray.length !== 0 ? jxStringArray : jxString
                                                                                        })
                                                                                    }
                                                                                </>
                                                                            </p>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.image !== null && value.image !== undefined ? (
                                                                            <>
                                                                                {
                                                                                    value.image.caption !== "" ? (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <img className='blog-inc-img' alt={value.image.caption} src={value.image.url} ></img>
                                                                                            </div>
                                                                                        </>
                                                                                    ) : (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <img className='blog-inc-img' alt="no-caption" src={value.image.url} ></img>
                                                                                            </div>
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.video !== null && value.video !== undefined ? (
                                                                            <>
                                                                                {
                                                                                    value.video.caption !== "" ? (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <video className='blog-inc-video' alt={value.video.caption} src={value.video.url} ></video>
                                                                                            </div>
                                                                                        </>
                                                                                    ) : (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <video className='blog-inc-video' alt="no-caption" src={value.video.url} ></video>
                                                                                            </div>
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.embed !== null && value.embed !== undefined ? (
                                                                            <>
                                                                                {
                                                                                    value.embed.caption !== "" ? (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <embed src={value.embed.url} ></embed>
                                                                                            </div>
                                                                                        </>
                                                                                    ) : (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <embed src={value.embed.url} ></embed>
                                                                                            </div>
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.code !== null && value.code !== undefined ? (
                                                                            <>
                                                                                <Code
                                                                                    codeString={value.code.text}
                                                                                    language={value.code.language}
                                                                                />
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </article>
                                            </section>
                                            <strong><span style={{ cursor: 'pointer' }} onClick={() => comeBackToBlogs()} > {pageLang === "ES" ? (<>Volver al blog</>) : (<>Back to blog</>)} 🔙</span></strong>
                                        </section>
                                    </section>
                                </>
                            )
                        }
                    </>
                )
            }
        </>
    );
}

export default BlogViewer;
