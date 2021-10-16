const Paginator = (props) => {
    return (
        <div>
            {
                props.pagesNumbers.map(page => {
                    return <span key={page} className={props.currentPage === page ? props.selectedPage : ''}  
                                    onClick={() => props.setPage(page)}>{page}</span>
                })
            }
        </div>
    )
}

export default Paginator