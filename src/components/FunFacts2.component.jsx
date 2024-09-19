import dinofact from "../assets/dinofact-2.png";

const FunFacts2 = ({ facts }) => {
    return (
        <section className="w-[80vw] flex flex-col items-center p-16 gap-14">
            <div className="flex w-full flex-row-reverse justify-between gap-16 mt-8">
                <div className="w-[25vw] shadow-black shadow-xl bg-transparent -translate-y-6 rotate-6 opacity-0" id="img">
                    <img src={dinofact} alt="" />
                </div>
                <div className="flex w-[45vw] flex-col items-center justify-center text-center">
                    <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24">{facts}</h1>
                    <a href="https://www.nhm.ac.uk/discover/dino-directory/" target="blank" className="underline text-white links opacity-0 -translate-x-24">Know More</a>
                </div>
            </div>
        </section>
    );
}

export default FunFacts2;