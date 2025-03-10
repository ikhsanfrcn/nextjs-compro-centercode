import Image from "next/image"

export const HeroImage: React.FC = () => {
    return (
        <Image
        src="/heroimage.webp"
        width={0}
        height={0}
        alt=""
        sizes="100%"
        className="w-full md:w-1/2 h-auto object-cover py-10"
        />
    )
}