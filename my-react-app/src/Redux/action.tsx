const FILM_LIST_LENGTH = 'FILM_LIST_LENGTH';
const SORTING_OPTIONS = 'SORTING_OPTIONS';
const SORTING_YEAR = 'SORTING_YEAR';
const FILTER_GENRES = 'FILTER_GENRES';
const DELETE_FILTER_GENRES = 'DELETE_FILTER_GENRES';
const ADD_FILTER_GENRES = 'ADD_FILTER_GENRES';
const RESET_FILTERS = 'RESET_FILTERS';
const AUTHORIZATION = 'AUTHORIZATION';
const MODAL_LOGIN = 'MODAL_LOGIN'

const actionCreator = (type) => (payload) => ({
    type,
    payload,
});

const setTotalPages = actionCreator(FILM_LIST_LENGTH);
const sortingOptions = actionCreator(SORTING_OPTIONS);
const sortingYear = actionCreator(SORTING_YEAR);
const filterGenres = actionCreator(FILTER_GENRES);
const deleteFilterGenres = actionCreator(DELETE_FILTER_GENRES);
const addFilterGenres = actionCreator(ADD_FILTER_GENRES);
const resetFilters = actionCreator(RESET_FILTERS);
const isAuthorization = actionCreator(AUTHORIZATION);
const isModalLogin = actionCreator(MODAL_LOGIN)

export {
    setTotalPages,
    sortingOptions,
    sortingYear,
    filterGenres,
    deleteFilterGenres,
    addFilterGenres,
    resetFilters,
    isModalLogin,
    isAuthorization,
    FILM_LIST_LENGTH,
    SORTING_OPTIONS,
    SORTING_YEAR,
    FILTER_GENRES,
    DELETE_FILTER_GENRES,
    ADD_FILTER_GENRES,
    RESET_FILTERS,
    AUTHORIZATION,
    MODAL_LOGIN
};
