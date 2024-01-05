import { CHANGE_DATA } from "./Actiontype";
import { data } from "./data";


  
  
const initialState = {
  data:{
    emmissions:[1480, 1160, 590, 800, 900,1100,1300,900,1190,1500,900,700],
    revenue:[1240, 965, 400, 671, 827,1000,1000,850,1150,1100,800,650]
  },
  pie_data:data
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
       case CHANGE_DATA: 
       return { ...state, data:payload };
    default:
      return state;
  }
};