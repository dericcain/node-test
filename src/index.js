import { createConnection } from 'typeorm';
import fastify from 'fastify';
import { Note } from './models';
import faker from 'faker';

const f = fastify({ logger: true });

(async function() {
  try {
    const db = await createConnection()

    f.get('/notes/:id', async (req) => {
      console.log(req.params.id);
      const note = await db.getRepository(Note)
        .findOne({ id: req.params.id })
      return note;
    })

    f.get('/notes', async () => {
      const note = new Note();
      note.text = faker.lorem.sentence()
      await db.getRepository(Note).save(note)
      return note;
    })

    f.listen(7000, (err, address) => {
      if (err) throw err
      console.log(`server listening on ${address}`)
    })
  } catch (error) {
    throw new Error(error);
  }
})()
