import React, { useEffect, useState } from 'react'
import "./todo.css"
import ProductCard from '../components/apiComponents/productCard'
import axios from 'axios'

const API = () => {

    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])
    // async garna bitikai background mah execute hunxa
    // await le code lai rokera rakhxa 
    // async funciton call garyo bhane prompts return garxa
    const getData = async() =>{
        let result = await axios.get("https://dummyjson.com/products/")
        setProducts(result.data.products)
        setLoading(false)
        // console.log(result.data.products)
    }
    return(
        <div id="todoContainer">
            
                <h3 className='text-white text-center py-4'>My Products</h3>
                

                <div id="todos" className='container my-4 d-flex justify-content-between flex-wrap'> 
                    {
                        loading? <>
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        </>:
                            products.map((pro) => {
                                return <ProductCard product={pro} />
                            })
                    }
                </div>
        </div>
    )
}

export default API