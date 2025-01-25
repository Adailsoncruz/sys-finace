import { useEffect, useLayoutEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/modal";
import Table from "../../components/Table/Table";
import axios from "axios";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";

export default function Products() {
    const [open, setOpen] = useState(false);
    const [openModalUpdate, setopenModalUpdate] = useState(false)

    const [selectedProduct, setSelectedProduct] = useState (null)
    const [searchInput, setSearchInput] = useState("");

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);

    async function buscarDados() {
        const resposta = await axios.get("http://localhost:3000/products")

        setProductsFiltered(resposta.data)
        setProducts(resposta.data)
    }

    function handleFilterProducts() {
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchInput.toLowerCase()))

        setProductsFiltered(filteredProducts)
        console.log(filteredProducts)
    }

    
    useEffect(() => {
        handleFilterProducts()
    }, [searchInput])
    //console.log(products)
    //console.log(products.filter((products) => product.name.length > 3)
    

    useEffect(() => {
        buscarDados()
    },[])

    function handleUpdateProduct(product){
        setSelectedProduct(product),
        setopenModalUpdate(true);
    }

    console.log(selectedProduct)

    return (
        <main>
            <Header
             open={open} 
             setOpen={setOpen} 
             setSearchInput={setSearchInput}
             />
            <Table
             products={productsFiltered} 
             openModalUpdate={handleUpdateProduct}
             />
            <Modal open={open} setOpen={setOpen} />
            <ModalUpdate
             open={openModalUpdate} 
             setOpen={setopenModalUpdate}
             selectedPoduct={selectedProduct}
             setselectedProduct={setSelectedProduct}
             />
        </main>
    )
}