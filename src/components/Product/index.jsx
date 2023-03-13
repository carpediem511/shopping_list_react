const Product = (props) => {

	const { product, deleteProduct } = props

	return (

		<div className="bg-purple-200 rounded-lg shadow-md w-3/12 text-purple-900 font-semibold text-base mt-20 py-6 px-8">

			<div className="flex flex-col items-start mb-10 grow">
				<p className="text-lg">{product.category}</p>
				<p className="">{product.image}</p>
				<p className="text-xl">{product.cost} рублей</p>
				<p className="text-2xl font-bold">{product.name}</p>
				<p className="text-md">{product.weight} кг</p>
			</div>
			<a className="hover:underline cursor-pointer text-purple-900 grow-0" onClick={() => deleteProduct(product.id)}>Удалить</a>
		</div>
	)
}

export default Product