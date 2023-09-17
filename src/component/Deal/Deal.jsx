 import "./Deal.css";
 const Deal=() =>{
    return (
        <div className="">
            <div className=" pd-top text-align">
                <h1>Deal Zone</h1>
            </div>
            <div className=" Deal flex gap-25">
                <div className="mx-left box1">
                    <h1 className=" top text-align">MIN <br /> 50%  <br />OFF</h1>

                </div>
                <div className="box2">
                     <h1 className=" top text-align">HALF <br /> PRICE <br /> STORE</h1>
                </div>
                <div className="box3">
                   <h1 className=" top text-align">UNDER <br /> RS. 699</h1>
                </div>
                <div className="box4">
                  <h1 className="top text-align">MIN <br /> RS. 899 </h1>
                </div>
            </div>
           
        </div>
    )
}
export default Deal