import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9009/api/'}),
    endpoints: build => ({
        getTodos: build.query({
            query: () => 'todos'
        }), 
        toggleTodo: build.mutation({

        }), 
        createTodo: build.mutation({

        })
    })
})

export const {
     useGetTodosQuery, useToggleTodoMutation, useCreateTodoMutation
} = todosApi