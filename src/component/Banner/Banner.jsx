import "./Banner.css"

const Banner=()=>{
    return (
        <div className="banner container">
          <div className="mx-auto banner-inner text-align">
            <h1>Transform Your Furniture With The<b>New Cover</b></h1>
            <button className="banner-btn">Get 50% off</button>
          </div>
            <div className="text-align banner-image">
                <img className="mx-auto" src="/img/banner.png" alt="banner"></img>
            </div>
        </div>
    )
}
export default Banner