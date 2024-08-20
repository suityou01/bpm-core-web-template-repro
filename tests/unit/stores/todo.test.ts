import { setActivePinia, createPinia } from 'pinia'
import { useTodosStore } from '../../../stores/todos'
import { afterEach, expect, vi } from 'vitest'
import { registerEndpoint } from '@nuxt/test-utils/runtime'

describe('todo store tests', () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        // so it's automatically picked up by any useStore() call
        // without having to pass it to it: `useStore(pinia)`
        setActivePinia(createPinia())
      })
    afterEach(() => {
      vi.unstubAllGlobals()
    })
    it('should create', () => {
        const todo = useTodosStore()
        expect(todo).toBeTruthy()
    })
    it('should fetch todos', async () => {
      const _fetch = vi.fn()
      _fetch.mockResolvedValue({ data: [
              {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              },
              {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
              },
              {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
              },
            ] 
          })
      vi.stubGlobal('$fetch', _fetch)
      const todoStore = useTodosStore()
      await todoStore.fetchTodos()
      expect(_fetch).toBeCalledTimes(1)
      expect(todoStore.todos).toBeTruthy()
      expect(_fetch).toBeCalledWith('https://jsonplaceholder.typicode.com/todos', {
        method: 'get'
      })
    })
})