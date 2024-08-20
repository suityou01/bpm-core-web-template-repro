import { afterEach, describe, expect, it, vi } from "vitest";
import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import ToDo from "~/components/ToDo.vue";
import { screen } from "@testing-library/vue";

describe('component tests', () => {
    afterEach(() => {
        vi.unstubAllGlobals()
    })
    it('can be imported', () => {
        expect(ToDo).toBeTruthy()
    })
    it('can mount todo component', async () => {
        const todo = await mountSuspended(ToDo, {
            props:
                {
                    todo: {
                        id: 1,
                        completed: true,
                        title: "Clean Walrus"
                    }
                }
            }
        )
        expect(todo.html()).toMatchInlineSnapshot(`
            "<div class="task is-complete">
              <div class="content">Clean Walrus</div>
              <div class="buttons"><button>Undo</button><button class="delete">Delete</button></div>
            </div>"
        `)
    })
    it('can render todo component', async () => {
        await renderSuspended(ToDo, {
            props:
                {
                    todo: {
                        id: 1,
                        completed: true,
                        title: "Clean Walrus"
                    }
                }
            })
        expect(screen.getByText('Clean Walrus')).toBeDefined()
      })
})
