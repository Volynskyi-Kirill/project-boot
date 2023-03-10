import { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import {
    PaginationContext,
    SetPaginationContext,
} from '../context/pagination_context';
import './pagination_block.css';

interface FilmListState {
    filmListLength: number;
}

function PaginationBlock() {
    const dataContext = useContext(PaginationContext);
    const { pageNow } = dataContext;
    const setPageNow = useContext(SetPaginationContext);
    const totalPages = useSelector(
        (state: FilmListState) => state.films.filmListLength
    );


    const nextPage = () => {
        setPageNow(pageNow + 1);
    };

    const previousPage = () => {
        setPageNow(pageNow - 1);
    };

    return (
        <div className="pageNow-container">
            <button
                className={pageNow ? `button-active` : 'button-disable'}
                type="button"
                onClick={previousPage}
                disabled={!pageNow}
            >
                Назад
            </button>
            <button
                className={
                    pageNow === Number(Math.ceil(totalPages)) - 1
                        ? 'button-disable'
                        : `button-active`
                }
                type="button"
                onClick={nextPage}
                disabled={pageNow === Number(Math.ceil(totalPages)) - 1}
            >
                Вперед
            </button>
            <div className="page">
                {pageNow + 1} of {Math.ceil(totalPages)}
            </div>
        </div>
    );
}

export { PaginationBlock };
