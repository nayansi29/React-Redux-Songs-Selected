import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: 'Phela Nasha', Duration: '3:45' },
    { title: 'Tujhe Dekha toh', Duration: '4:40' },
    { title: 'Chand Chupa Badal m', Duration: '5:40' }
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});