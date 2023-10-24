import { render, screen } from "@testing-library/react"
import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'
import Tasks from "./Tasks"

describe('Tasks Component', () => {
    const worker = setupWorker(
        http.get("http://jsonplaceholder.typicode.com/todos?_limit=10", async () => {
            return HttpResponse.json(
                {
                    userId: 1,
                    id: 1,
                    title: "delectus aut autem",
                    completed: false,
                }

            )
        })
    )

    beforeAll(() => {
        worker.start();
    })

    it('should fetch and show tasks on button click', () => {
        render(<Tasks />)
    })
})