export default function(state = [], action) {
  switch (action.type) {
    case 'TEXT_CHANGED':
      return [...state.slice(0, action.index),
              { 
                id: state[action.index].id,
                type: state[action.index].type,
                text: action.value,
                buttons: state[action.index].buttons
              },
              ...state.slice(action.index + 1)];
    case 'TEXT_CARD_ADDED':
      return [...state,
              {
                id: "msg" + Date.now(),
                type: "text",
                text: "",
                buttons: []
              }]
    case 'TEXT_CARD_DELETED':
      return [...state.slice(0, action.index),
              ...state.slice(action.index + 1)];
    case 'ADD_BUTTON':
      return [...state.slice(0, action.index),
              { 
                id: state[action.index].id,
                type: state[action.index].type,
                text: state[action.index].text,
                buttons: [...state[action.index].buttons,
                          {
                            id: "btn" + Date.now(),
                            name: "new button"
                          }]
              },
              ...state.slice(action.index + 1)];
    case 'BUTTON_NAME_CHANGED':
      return [...state.slice(0, action.msgIndex),
              { 
                id: state[action.msgIndex].id,
                type: state[action.msgIndex].type,
                text: state[action.msgIndex].text,
                buttons: [...state[action.msgIndex].buttons.slice(0, action.btnIndex),
                          {
                            id: state[action.msgIndex].buttons[action.btnIndex].id,
                            name: action.name
                          },
                          ...state[action.msgIndex].buttons.slice(action.btnIndex + 1)]
              },
              ...state.slice(action.msgIndex + 1)]
    case 'DELETE_BUTTON':
      return [...state.slice(0, action.msgIndex),
              { 
                id: state[action.msgIndex].id,
                type: state[action.msgIndex].type,
                text: state[action.msgIndex].text,
                buttons: [...state[action.msgIndex].buttons.slice(0, action.btnIndex),                         
                          ...state[action.msgIndex].buttons.slice(action.btnIndex + 1)]
              },
              ...state.slice(action.msgIndex + 1)]
    default: 
      return state;
  }
  return state;
}



