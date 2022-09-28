const graphUrl = process.env.REACT_APP_GRAPH_URL

const getCerts = async (institute) => {
  let certs = []
  let response = await fetch(graphUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
            query Query($institute: String) {
                Certs(institute: $institute) {
                    certTitle
                    certUrl
                }
            }
            `,
      variables: {
        institute: institute
      },
    }),
  });
  let jsonobjetc = await response.json();
  certs = jsonobjetc.data.Certs
  return certs
};

const getBlog = async (blogpostId) => {
  let blogs = []
  if (blogpostId !== "" && blogpostId !== null && blogpostId !== undefined) {
    let response = await fetch(graphUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query Blogpost($blogpostId: String) {
          Blogpost(id: $blogpostId) {
            blogparagraphs {
              paragraph {
                text
                annotations {
                  bold
                  color
                  code
                  italic
                  strikethrough
                  underline
                }
                hasurl
                url
                list
              childs {
                annotations {
                  bold
                  code
                  color
                  italic
                  strikethrough
                  underline
                }
                text
                hasurl
                url
                ordered
              }
              }
              header1 {
                text
                annotations {
                  bold
                  color
                  code
                  italic
                  strikethrough
                  underline
                }
                hasurl
                url
              }
              header2 {
                text
                annotations {
                  bold
                  color
                  code
                  italic
                  strikethrough
                  underline
                }
                hasurl
                url
              }
              header3 {
                text
                annotations {
                  bold
                  color
                  code
                  italic
                  strikethrough
                  underline
                }
                hasurl
                url
              }
              category {
                text
                annotations {
                  bold
                  color
                  code
                  italic
                  strikethrough
                  underline
                }
                hasurl
                url
              }
              image {
                caption
                url
              }
              video {
                caption
                url
              }
              embed {
                url
                caption
              }
              code {
                language
                text
              }
            }
          }
        }
              `,
        variables: {
          blogpostId: blogpostId
        },
      }),
    });
    let jsonobjetc = await response.json();
    blogs = jsonobjetc.data.Blogpost ? jsonobjetc.data.Blogpost.blogparagraphs : [];
  }
  return blogs
};

const getBlogs = async () => {
  let blogs = []
  let response = await fetch(graphUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
            query Blogs($blogPageId: String) {
                Blogs(blogPageId: $blogPageId) {
                  id
                  category
                  emoji
                  title
                  imgsrc
                }
              }
            `,
      variables: {
        blogPageId: '6e35e1875c004888ade932aeff2200b4'
      },
    }),
  });
  let jsonobjetc = await response.json();
  blogs = jsonobjetc.data.Blogs
  return blogs
};


const getInspires = async () => {
  let blogs = []
  let response = await fetch(graphUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
            query Blogs($blogPageId: String) {
                Blogs(blogPageId: $blogPageId) {
                  id
                  category
                  emoji
                  title
                  imgsrc
                }
              }
            `,
      variables: {
        blogPageId: 'e2b10f9b349e4451af46cb86ac502fe4'
      },
    }),
  });
  let jsonobjetc = await response.json();
  blogs = jsonobjetc.data.Blogs
  return blogs
};

const getProjects = async () => {
  let blogs = []
  let response = await fetch(graphUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
            query Blogs($blogPageId: String) {
                Blogs(blogPageId: $blogPageId) {
                  id
                  category
                  emoji
                  title
                  imgsrc
                }
              }
            `,
      variables: {
        blogPageId: 'e9b3ecdd0b034fc88d4ed8b09adf7a98'
      },
    }),
  });
  let jsonobjetc = await response.json();
  blogs = jsonobjetc.data.Blogs
  return blogs
};

export {
  getCerts, getBlog, getBlogs, getInspires, getProjects
}