const Posts = require('../models/posts');

// const mockPosts = [
//   {
//     title: 'título fake',
//     content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
//   },
//   {
//     title: 'título fake',
//     content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
//   },
//   {
//     title: 'título fake',
//     content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
//   },
//   {
//     title: 'título fake',
//     content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
//   },
// ];

const createPost = async (req, res) => {
  try {
    const post = await Posts.registerPost(
      req.body.title,
      req.body.content
    );
    if (!post) throw Error;
    res.status(201).json({ message: 'Novo Post', post });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao cadastrar postagem', error: err });
  }
};

const getPosts = async (_req, res) => {
  try {
    const posts = await Posts.getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar postagens', error: err });
  }
};

// module.exports = (req, res, next) => {
//   console.log(req.user);
//   res.status(200).json({ mockPosts });
// };

module.exports = {
  createPost,
  getPosts,
};
