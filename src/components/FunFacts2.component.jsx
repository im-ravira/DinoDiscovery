import PropTypes from 'prop-types';
import dinofact from "../assets/dinofact-2.png";

const FunFacts2 = ({ facts }) => {
    return (
        <section className="w-[88vw] md:w-[100vw] lg:w-[80vw] flex flex-col items-center md:p-20 md:gap-14">
            <div className="flex w-full flex-row-reverse justify-between md:gap-16 mt-4 md:mt-8">
                <div className="w-[40vw] lg:w-[25vw] shadow-black hidden md:block shadow-xl -translate-y-6 rotate-6 opacity-0" id="img">
                    <img src={dinofact} alt="" />
                </div>
                <div className="flex w-full lg:w-[45vw] flex-col items-center justify-center text-center">
                    <h1 className="font-bold text-xl md:text-[28px] lg:text-[40px] text-white facts opacity-0 -translate-x-24">{facts}</h1>
                    <a href="https://www.nhm.ac.uk/discover/dino-directory/" target="blank" className="md:block hidden underline text-white links opacity-0 -translate-x-24">Know More</a>
                </div>
            </div>
        </section>
    );
}
FunFacts2.propTypes = {
    facts: PropTypes.string.isRequired,
};
export default FunFacts2;
