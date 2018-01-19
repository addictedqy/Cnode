const SIDEBAR_OPEN = 'SIDEBAR_OPEN';
const SIDEBAR_CLOSE = 'SIDEBAR_CLOSE'; 

const sidebarState = {
  sidebarOpen: false,
}

export const sidebarOpen = () => {
  return {
    type: SIDEBAR_OPEN,
    payload: true,
  }
}

export const sidebarClose = () => {
  return {
    type: SIDEBAR_CLOSE,
    payload: false,
  }
}

export const sidebarReducer = (state = sidebarState, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN: 
      return { 
        sidebarOpen: action.payload 
      };
    case SIDEBAR_CLOSE:
      return {
        sidebarClose: action.payload
      }
  }
  return state;
}