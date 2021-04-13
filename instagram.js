const {Usuario, Post, Comentario, sequelize} = require('./models');
const {Op, useInflection} = require('sequelize');

Usuario.findByPk(1, {
    include:["curtiu"]
}).then(post => {
    console.log(post.toJSON());
    sequelize.close();
})

// Usuario.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
// }).then((resultado) =>{
//     console.table(resultado.posts.map((resultado) => resultado.toJSON()));
// });
// outro jeito
// Post.findByPk(1, {
//     include:['comentario']
// }).then(post => {
//     console.log(post.toJSON());
//     sequelize.close();
// })

// Usuario.create({
//     nome: 'Petter',
//     email: 'petter@avanade.com',
//     senha: '12345'
// }).then((resultado) =>{
//     console.table(resultado.toJSON());
// });

// Post.create({
//     texto: 'Ola!',
//     usuarios_id: 11
// }).then((resultado) => {
//     console.table(resultado.toJSON());
// })

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// },    {
//         where:{
//         id: 2
//     }
// }).then((resultado) =>{
//     console.log(resultado);
// });

// Usuario.destroy({
//     where:{
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })
    

// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     },
//     order: [
//         ['id','ASC']
//     ]
// })
// .then((resultado) =>{
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'}
//     },
//     order: [
//         ['id','ASC']
//     ]
// })
// .then((resultado) =>{
//     console.table(resultado.map(user => user.toJSON()));
// });

// for(let i = 0; i < 6; i+=2){
//     Comentario.findAll({
//         order: [
//             ['id','DESC']
//         ],
//         offset: i,
//         limit: 2
//     })
//     .then((resultado) =>{
//         console.table(resultado.map(user => user.toJSON()));
//     });
// }

// Post.findByPk(1)
// .then((resultado) =>{
//     console.log(resultado.toJSON());
// });

// Comentario.findOne({
//     where: {
//         texto: {[Op.like]: 'oi%'}
//     }
// })
// .then((resultado) =>{
//     console.log(resultado.toJSON());
// });
