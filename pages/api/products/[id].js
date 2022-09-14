import { prisma } from '../../../config/connection'


export default async function handler(req, res) {
	switch (req.method) {
		case "GET": {
			return getProduct(req, res);
		}
		case "DELETE": {
			return deleteProduct(req, res);
		}
		case "PUT": {
			return updateProduct(req, res);
		}
	}
}

const getProduct = async (req, res) => {
	const { id } = req.params || req.query;

	prisma.produto.findUnique({ where: { id: Number(id) } })
	.then((produto) => res.send(produto))
	.catch((error) => res.send("Error: " + error.message))
}

const deleteProduct = async (req, res) => {
	const { id } = req.params || req.query;

	prisma.produto.delete({ where: { id: Number(id) } })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

const updateProduct = async (req, res) => {
	const { id } = req.params || req.query;

	prisma.produto.update({ where: { id: Number(id) }, data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}
