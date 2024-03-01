export function QRcode({ dataURI, label }) {
    return (
        <div className="col text-center">
            <img
            src={dataURI} 
            alt={label}
            width="150" 
            />
            <p>{label}</p>
        </div>
    )
}