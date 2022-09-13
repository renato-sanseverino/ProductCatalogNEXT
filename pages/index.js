import { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';


const HomePage = ({ products }) => {
  const [catalogo, setCatalogo] = useState();

  const getCatalogo = async () => {
    const response = await fetch('api/products')
    .then((response) => response.json());

    setCatalogo(response);
  }

  useEffect(() => {
    getCatalogo();
  }, []);

	return (
		<>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-3">{
          catalogo&&
          catalogo.map( (product) => <ProductCard produto={product} /> )
			}
      </div>
		</>
	)
}


/*
export const getServerSideProps = async (context) => {
	const hostAddress = 'http://' + context.req.headers.host;
	const { data: products } = await fetch(hostAddress + '/api/products')
	return {
		props: {
			products,
		},
	}
}
*/

export default HomePage
