import Card from "./Card"

export default function Grid() {
    return (
        <div className="py-16 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}