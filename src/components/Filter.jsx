import debounce from "lodash.debounce";

export function Filter(props) {
    return (
        <nav className="navbar bg-light mb-2">
            <div className="container-fluid">
                
                <form className="row row-cols gx-2 gy-1 align-items-center w-100" role="search">
                    <div className="col-md-2 col-lg-1">
                        <select 
                        onChange={(event) => props.handleSetCluster(event.target.value)} className="form-select form-select-lg" 
                        aria-label="Large select example"
                        defaultValue={'A'}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>
                    <div className="col-md-10 col-lg-11">
                        <input
                        onChange={debounce((event) => props.handleSetFilter(event.target.value), 500)}
                        className="form-control form-control-lg" 
                        type="search" 
                        placeholder="Filter locations" 
                        aria-label="Filter locations" />
                    </div>
                </form>
            </div>
        </nav>
    )
}