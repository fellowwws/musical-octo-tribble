import debounce from "lodash.debounce";

export function Filter(props) {
    return (
        <nav class="navbar bg-light mb-2">
            <div class="container-fluid">
                <form class="w-100" role="search">
                    <input
                    onChange={debounce((event) => props.handleSetFilter(event.target.value), 500)}
                    class="form-control form-control-lg" 
                    type="search" 
                    placeholder="Filter: A1-1A B1-2B A1-3C..." 
                    aria-label="Filter locations" />
                </form>
            </div>
        </nav>
    )
}