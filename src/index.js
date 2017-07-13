
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux';
import { combineReducers, createStore } from 'redux';


/////////////////////////////////////////////////////////////////////////////////
////////////////////////        reducers     /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state;
    }
};


const todoApp = combineReducers({
    todos
});
/////////////////////////////////////////////////////////////////////////////////
////////////////////////        actions     /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};


/////////////////////////////////////////////////////////////////////////////////
////////////////////////    components      /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

///////////////////   content   ////////////////////////////////

const Content = ({text}) => {
    return (
        <div>
            <h2>this is content:</h2>
            <p>
                {text}
            </p>
        </div>
    );
};

///////////////////   toodo   ////////////////////////////////

const Todo = ({
                  onClick,
                  completed,
                  text
              }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration:
                completed ?
                    'line-through' :
                    'none'
        }}
    >
        {text}
    </li>
);

const TodoList = ({
                      todos,
                      onTodoClick
                  }) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);


/////////////////////////////////////////////////////////////////////////////////
////////////////////////    containers      /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


const mapStateToContentProps = (state, ownProps) => {
    return {
        text:
         state.todos.filter(t=>t.completed).map(t=>t.text)
    };
};
const ContentContainer = connect(mapStateToContentProps)(Content);




const mapStateToTodoListProps = (
    state
) => {
    return {
        todos: state.todos
    };
};
const mapDispatchToTodoListProps = (
    dispatch
) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};
const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);



/////////////////////////////////////////////////////////////////////////////////
////////////////////////    app             /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


const TodoApp = () => (
    <div>
        <VisibleTodoList />
        <ContentContainer/>
    </div>
);
const initialState = {
    todos: [{id:123, text:'hello', completed: false},{id:124, text:'hi', completed: false},{id:125, text:'previet', completed: false}]
};


/////////////////////////////////////////////////////////////////////////////////
////////////////////////    index           /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
    <Provider store={createStore(todoApp,initialState)}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);