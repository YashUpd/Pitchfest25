const Images = ({img}) =>{
    return(
        <div className="w-full bg-custom-gradient flex justify-center rounded-full">
             <img src={img}
            className=" w-28 p-4"/>
        </div>
           

    )
}
export default Images;