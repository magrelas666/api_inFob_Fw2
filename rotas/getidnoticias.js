module.exports = (app) => {
  app.get('/noticias/id/:id', async (req, res) => {
    await app.DBClient.connect();
    const tipo = req.body.tipo
    const noticias = await app.DBClient.db('portalnoticias')
      .collection('noticias').find().toArray();
      .find({tiponoticia:req.body.tipo}).toArray();
    console.log(noticias);
    res.json(noticias);
  })
}