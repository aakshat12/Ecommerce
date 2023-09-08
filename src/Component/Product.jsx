import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addcart } from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom'

 const Product = ({selectProduct}) => {

    // const {id} = useParams();

    console.log("selectProduct",selectProduct)
    const [Product,setProduct] = useState(selectProduct);
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const addProduct = (Product) => {

        dispatch(addcart(Product));
    }


    // useEffect(()=> {
    //     const getproduct = async () => {
    //         setLoading(true);
    //         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    //         setProduct(await response.json());
    //         setLoading(false);
    //     }
    //     getproduct();
    // }, [input]);

    const Loading = () =>{
        return(
            <>
            <div className="col-md-6">
                <Skeleton height={50} width={300}/>
                <Skeleton height={75} />
                <Skeleton height={25} width={300}/>
                <Skeleton height={50} />
                <Skeleton height={150} />
            </div>
            </>
        )

    }
    const ShowProduct = () =>{
        return(
            <>
             <div className="col-md-6">
             <img src={selectProduct.image} alt={selectProduct.title} height="400px" width="400px"/>
             </div>
             <div className="cl-md-6">
                <h4 className='text-uppercase text-black-50'>
                    {selectProduct.category }
                </h4>
                <h1 className='display-5'>
                    {selectProduct.title}
                </h1>
                <p className='lead fw-bolde '>
                    Rating{selectProduct.rating && selectProduct.rating.rate}
                    <i className='fa fa-star'>
                        $ {selectProduct.price}
                    </i>
                </p>
                <h3 className='display-5 fw-bold my-4'>
                    $ {selectProduct.price}

                </h3>
                <p className='lead'>{selectProduct.description}</p>
                <button className='btn btn-outline-dark' onClick={()=> addProduct(selectProduct)}>
                    Add to Cart

                </button>
                <NavLink to='/cart' className="btn btn-dark ms-2 px-3" onClick={()=>addcart(selectProduct) }>
                    Go to Cart
                </NavLink>
             </div>
            </>
        );
    }
   

  return (
    <div>
        <div className='container'>
            <div className='row'>
              {loading ? <Loading/> : <ShowProduct/>}
              </div>
        </div>
    </div>
 );
}


export default Product;