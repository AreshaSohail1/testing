 import "./Section.css"
 const Section=()=>{
    return (
        <div className="flex container">
                <  div className="flex">
                    <img width="600" src="/img/sofa-cover.svg" alt=""></img>
                </div>
            <div className="margin-left">
                <h1>Deal Of The Day</h1>
                <p className="line color word">Plain Cotton Jersey Fitted Sofa Cover In Grey Color</p>
                <div className="flex flex-warp ">
                    <h1 className="color    padding">0 <br />Day  :</h1>
                    <h1 className="color padding" >0 <br /> Hours :</h1>
                    <h1 className="color padding" >0 <br /> Mints  :</h1>
                    <h1 className=" color padding" >0 <br /> Second  </h1>
                </div>
                <div className="flex justify-center">
                    <button className="btn">buy now</button>
                </div>
               
            </div>

        </div> 
    )
}
export default Section