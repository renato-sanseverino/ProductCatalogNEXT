import { prisma } from '../../../config/connection'


export default async function handler(req, res) {
	switch (req.method) {
		case "POST": {
			return saveCategory(req, res);
		}
		case "GET": {
			return getCategories(req, res);
		}
	}
}

const saveCategory = async (req, res) => {
    // const { id, nome } = req.body;

	prisma.categoria.create({ data: req.body })	
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

const getCategories = async (req, res) => {
	prisma.categoria.findMany()
	.then((categorias) => res.send(categorias))
    .catch((error) => res.send("Error: " + error.message))
}
