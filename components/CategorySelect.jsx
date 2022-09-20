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
        <img src="icons/circle_plus.svg" className="w-7 h-7"></img>
        </div>
    )
}
