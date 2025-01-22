const Textbox = ({text}) =>{
    return(
        <div className="bg-yellow-background rounded-lg text-base sm:text-lg md:text-xl xl:text-2xl text-center p-2 sm:p-4 md:p-6 xl:p-8 flex justify-center items-center font-bold w-full whitespace-nowrap">
            {text}
        </div>
    )
}
export default Textbox;