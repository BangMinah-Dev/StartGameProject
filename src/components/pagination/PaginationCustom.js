import { Pagination } from "react-bootstrap";
// import {getProducts} from "../../API/api"

export default function PaginationCustom({
  totalCount,
  activePage,
  firstPage,
  lastPage,
  nextPage,
  prevPage,
  changePage,
}) {
  let active = activePage;
  let pagination = [];
  let number = Math.ceil(totalCount / 5);
  for (let item = 1; item <= number; item++) {
    pagination.push(
      <Pagination.Item
        key={item}
        active={item === active}
        onClick={(event) => changePage(event.target.outerText)}
      >
        {item}
      </Pagination.Item>
    );
  }


  return (
    <Pagination>
      {activePage !== 1 ? (
        <>
          <Pagination.First onClick={firstPage} />
          <Pagination.Prev onClick={prevPage} />
        </>
      ) : (
        <>
          <Pagination.First />
          <Pagination.Prev />
        </>
      )}
      {activePage > 5 && <Pagination.Ellipsis />}
      {pagination}
      {activePage < number - 5 && <Pagination.Ellipsis />}
      <Pagination.Next onClick={nextPage} />
      <Pagination.Last onClick={lastPage} />
    </Pagination>
  );
}
