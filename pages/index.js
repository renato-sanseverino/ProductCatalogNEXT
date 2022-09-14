import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';


const HomePage = ({ products }) => {
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
		<Layout>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-3">{
				products&&
				products.map( (product) => <ProductCard produto={product} key={product.id} /> )
			}
			</div>
		</Layout>
	)
}

export const getServerSideProps = async (context) => {
	const protocol = context.req.headers["x-forwarded-proto"] || context.req.connection.encrypted?"https":"http"
	const hostAddress = protocol + '://' + context.req.headers.host;
	const response = await fetch(`${hostAddress}/api/products`)

	const products = await response.json();
	return { props: { products } }
}

export default HomePage
