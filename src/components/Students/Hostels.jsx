export default function Hostels() {
    const hostels = [
        "Victory Hostel",
        "Unity Lodge",
        "Golden Gate Hostel",
        "Heritage Hall",
        "Scholars Residence"
    ]

    return (
        <ul className="hostel-list">
            {hostels.map((hostel, i) => (
                <li key={i}>{hostel}</li>
            ))}
        </ul>
    )
}
