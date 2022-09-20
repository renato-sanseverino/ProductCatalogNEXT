import { useContext } from 'react'
import  CategoryContext  from './CategoryContext'


export const CategorySelect = () => {
    const {categories, setCategories} = useContext(CategoryContext);

	return (
        <div className="flex flex-row">
        <select>{
            categories&&
            categories.map( (categoria) => <option value={categoria.id} key={categoria.id} >{categoria.nome}</option> )
        }
        </select>
        <button>ADD</button>
        </div>
    )
}
