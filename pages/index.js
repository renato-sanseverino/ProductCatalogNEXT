import { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { ProductCard } from '../components/ProductCard'
import { ProductList } from '../components/ProductList'
import CategoryContext from '../components/CategoryContext'


const HomePage = ({ products, productCategories }) => {
	const [categories, setCategories] = useState(productCategories)

	/*
	const [catalogo, setCatalogo] = useState();

	const getCatalogo = async () => {
		const response = await fetch('api/products')
		.then((response) => response.json());

		setCatalogo(response);
	}

	useEffect(() => {
		getCatalogo();
	}, []);
	*/

	return (
		<CategoryContext.Provider value={{categories, setCategories}}>
			<Layout>
				<ProductList products={products}></ProductList>
				
				<div className="grid gap-4 grid-cols-1 md:grid-cols-3">{
					products&&
					products.map( (product) => <ProductCard produto={product} key={product.id} /> )
				}
				</div>
			</Layout>
		</CategoryContext.Provider>
	)
}

export const getServerSideProps = async (context) => {
	const protocol = context.req.headers["x-forwarded-proto"] || context.req.connection.encrypted?"https":"http"
	const hostAddress = protocol + '://' + context.req.headers.host
	let response = null

	response = await fetch(`${hostAddress}/api/products`)
	const products = await response.json()

	response = await fetch(`${hostAddress}/api/categories`)
	const productCategories = await response.json()

	return { props: { products, productCategories } }
}

export default HomePage
