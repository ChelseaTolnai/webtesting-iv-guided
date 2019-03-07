const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('hobbits mobel', () => {

    describe('insert()', () => {
        afterEach(async () => {
            await db('hobbits').truncate();
        })

        it('should insert the provided hobbit to db', async () => {
            const hobbit = await Hobbits.insert({ name: 'gaffer' });
            expect(hobbit.name).toBe('gaffer');
        });

        it('should insert the provided hobbits into db', async () => {
            await Hobbits.insert({ name: 'gaffer' });
            await Hobbits.insert({ name: 'sam' });

            let hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);

            let hobbit = await Hobbits.insert({ name: 'frodo' });
            expect(hobbit.name).toBe('frodo');

            hobbit = await Hobbits.insert({ name: 'gandolf' });
            expect(hobbit.name).toBe('gandolf');

            hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(4);

        });

    });

});