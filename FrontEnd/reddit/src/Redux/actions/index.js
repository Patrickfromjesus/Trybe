import reddit from "../../Services/Reddit";
export const IS_LOADING = 'IS_LOADING';
export const GET_DATA = 'GET_DATA';
export const GET_ERROR = 'GET_ERROR';

const isLoading = () => ({ type: IS_LOADING });
const getData = (content) => ({ type: GET_DATA, content, });
const getError = (error) => ({ type: GET_ERROR, error });

const fetchReddit = (param) => {
  return (dispatch) => {
      dispatch(isLoading());
      return reddit(param)
        .then((response) => dispatch(getData(response.data.children)))
        .catch((error) => dispatch(getError(error.message)))
    }
}

export default fetchReddit;
