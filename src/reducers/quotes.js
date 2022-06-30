export default (state = [], action) => {
  console.log(action)
  switch(action.type){
    case "ADD_QUOTE":
      console.log([...state, action.quote ])
        return  state = [...state, action.quote ]
    case "REMOVE_QUOTE":
        return "STATE"
  
    case "UPVOTE_QUOTE":
      return "STATE"
    case "DOWNVOTE_QUOTE":
      return "STATE"
    default: 
      return state 
  }
}
