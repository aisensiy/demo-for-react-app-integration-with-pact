import path from 'path';
import pact from 'pact';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './todos';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const MOCK_SERVER_PORT = 8234;

const term = pact.Matchers.term;
const like = pact.Matchers.somethingLike;
const eachLike = pact.Matchers.eachLike;

describe("Todos API", () => {
    const provider = pact({
        consumer: 'TodoApp',
        provider: 'TodoService',
        port: MOCK_SERVER_PORT,
        log: path.resolve(process.cwd(), 'logs', 'pact.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        logLevel: 'INFO',
        spec: 2
    });

    const todoException = {
        title: like('what to do'),
        completed: like(true)
    };

    const todosException = eachLike(todoException);

    beforeAll(() => provider.setup())

    afterAll(() => provider.finalize())

    describe("works", () => {
        beforeAll(done => {
            const interaction = {
                state: 'Has a list of todos',
                uponReceiving: 'a request for todo list',
                withRequest: {
                    method: 'GET',
                    path: '/todos'
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: todosException
                }
            };
            provider.addInteraction(interaction).then(done, done)
        });

        it('should get todos success', (done) => {
            const expectedActions = [
                { type: 'FETCH_TODOS_REQUEST' },
                { type: 'FETCH_TODOS_REQUEST_SUCCESS' },
                { type: 'LOAD_TODOS', payload: [{
                    title: 'what to do',
                    completed: true
                }] }
            ];
            const store = mockStore({});
            
            store.dispatch(actions.loadTodos()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
                done();
            });
        });

        it('successfully verifies', () => provider.verify())
    });
})
