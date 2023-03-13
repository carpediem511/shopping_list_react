import Header from "components/Header";
import Product from "components/Product";
import Footer from "components/Footer";
import { useState } from "react";

const bananasPicture = <img src="/images/bananas.jpeg" />
function App() {

	const [productList, setProductList] = useState(

		[
			{
				id: 1,
				category: "Фрукты",
				image: { bananasPicture },
				cost: 50,
				name: "Бананы",
				weight: 1

			},

			{
				id: 2,
				category: "Фрукты",
				image: "",
				cost: 70,
				name: "Персики",
				weight: 1

			},

			{
				id: 3,
				category: "Фрукты",
				image: "",
				cost: 100,
				name: "Манго",
				weight: 1.5

			},

			{
				id: 4,
				category: "Фрукты",
				image: "",
				cost: 150,
				name: "Драгонфрукт",
				weight: 2

			}
		]
	)

	const deleteProduct = (id) => {

		const filteredProducts = productList.filter(product => product.id !== id)
		setProductList(filteredProducts)
	}

	return (

		<div className="min-h-screen">
			<Header />
			<div className="mx-20 max-w-screen-lg mx-auto flex gap-8">
				{productList.length === 0 && (
					<div>Ваша корзина пуста!</div>
				)}

				{productList.length > 0 && productList.map((product) => {

					return (

						<Product key={product.id} product={product} deleteProduct={deleteProduct} />
					)
				})}
			</div>
			<Footer />
		</div>
	);

}

export default App;
