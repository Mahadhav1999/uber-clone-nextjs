import Image from "next/image"


export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[500px] h-[500px] sm:w-[300px] sm:h-[300px] md:h-[500px] md:w-[500px]">
                    <Image
                        src='/earner-illustra.webp'
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                    src='/Banner.webp'
                    fill
                    className="object-contain"
                    alt="hero"
                    />

                </div>
            </div>

        </div>
    )
}
