export function QRcode({ label }) {
    return (
        <div class="text-center border rounded">
            <img
            src={`./src/assets/qrcodes/${label}.png`} 
            alt={`${label}`}
            width="150" 
            />
            <p>{label}</p>
        </div>
    )
}