const request = require('supertest')
const app = require('../src/index')

describe('Testando lista de mensagem', () => {
  it('deve falhar por nao haver mensagens ainda', async () => {
    const res = await request(app).get('/mensagens')
    expect(res.status).toBe(400)
  })

  it('falha da mensagem caso seja curta', async () => {
    const res = await request(app).post('/mensagem/a')
    expect(res.status).toBe(400)
  })

  it('inclusao de mensagem com sucesso', async () => {
    const res = await request(app).post('/mensagem/tudo certo com envio da mensagem')
    expect(res.status).toBe(200)
  })

  it('deve imprimir as mensagens', async () => {
    const res = await request(app).get('/mensagens')
    expect(res.status).toBe(201)
  })


})