import Image from "next/image"

type Props = {
  auction: any
}

export default function AuctionCard({ auction }: Props) {
  return (
    <a href="">
      <div className="relative w-full bg-gray-200 aspect-video rounded-lg overflow-hidden">
        <Image
          src={auction.imageUrl}
          alt='Image of car'
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200opx) 50vw, 25vw"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-gray-700">{auction.make} {auction.model}</h3>
        <p className="font-semibold text-sm">{auction.year}</p>
      </div>
    </a>
  )
}
