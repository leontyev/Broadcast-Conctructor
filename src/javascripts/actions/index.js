export function textChanged(value, index) {
  return {
    type: 'TEXT_CHANGED',
    index,
    value
  }
}

export function textCardAdded() {
  return {
    type: 'TEXT_CARD_ADDED'
  }
}

export function textCardDeleted(index) {
  return {
    type: 'TEXT_CARD_DELETED',
    index
  }
}

export function addButton(index) {
  return {
    type: 'ADD_BUTTON',
    index
  }
}

export function buttonNameChanged(name, msgIndex, btnIndex) {
  return {
    type: 'BUTTON_NAME_CHANGED',
    name,
    msgIndex,
    btnIndex
  }
}

export function deleteButton(msgIndex, btnIndex) {
  return {
    type: 'DELETE_BUTTON',
    msgIndex,
    btnIndex
  }
}




