import rewiremock from 'rewiremock/webpack';

describe('Test', () => {
    it('should return good data', async () => {
        rewiremock('./src/fetch')
            .withDefault(Promise.resolve('test data'));
        
        rewiremock.enable();

        const doThingMocked = require('../src/do-thing').default;

        const result = await doThingMocked();

        console.log(result);

        rewiremock.disable();
    })
})