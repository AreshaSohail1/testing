 import './Category.css'
 const Category=() =>{
    return(
        <div className="category">
            <div className="text-align pd-top">
                <h1>Top Category</h1>
            </div>
            <div className="flex gap-20 flex-wrap">
                <div className='mx-left image-width'>
                    <img className='' src="/img/Accessories.webp" alt=""></img>
                    <h1 className='text-align font-size'>Accessoris</h1>
                </div>
                <div className=' image-width'>
                    <img src="/img/Bedding.webp" alt=""></img>
                    <h1 className=' text-align font-size'>Bedding</h1>
                </div>
                <div className="image-width">
                <img src="/img/chair-covers.webp" alt=""></img>
                <h1 className='text-align font-size'>Chair Covers</h1>
                </div>
                <div className="image-width">
                    <img src="/img/cushions.webp" alt=""></img>
                    <h1 className=' text-align font-size'>Cushions</h1>
                </div>
                <div className="image-width">
                    <img src="/img/Mens-fashion.webp" alt=""></img>
                    <h1 className=' text-align font-size'>Men's Fashion</h1>
                 </div>
                 <div className="image-width">
                    <img src="/img/storage-bags.webp" alt=""></img>
                    <h1 className='text-align font-size'>Storage Bags</h1>
                 </div>
                 <div className=" mx-left image-width">
                    <img src="/img/untitled-3sofa.webp" alt="sofa cover"></img>
                    <h1 className='text-align font-size'>Sofa Cover</h1>
                 </div>
                 <div className="image-width">
                    <img src="/img/Womens-Fashion.webp" alt="wpmen fashion"></img>
                    <h1 className='text-align font-size'>Women Fashion</h1>
                 </div>
                 <div className="image-width">
                    <img src="/img/waterproof.webp" alt="waterproof"></img>
                    <h1 className='text-align font-size'>Water Proof</h1>
                 </div>
            </div>
        </div>
    )
}
export default Category