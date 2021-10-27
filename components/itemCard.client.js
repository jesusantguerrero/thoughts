import Image from "next/image";

export default function ItemCard({ item, key }) {
    return (<div key={key}>
        <Image width={224} height={224} src={item.image}></Image>
        <p> {item.name} {item.dna} </p>
    </div>)
}