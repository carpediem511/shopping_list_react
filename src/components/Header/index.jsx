import Button from "components/Button";

function Header() {

	return (

		<div>

			<header className="bg-teal-100 py-8 text-fuchsia-800 font-semibold text-xl flex">
				<div className="flex max-w-screen-lg mx-auto gap-8 px-15 justify-between">
					<nav className="flex gap-8 justify-between items-center">
						<div>
							Текущий список покупок
						</div>

						<div>
							История покупок
						</div>

						<div>
							Профиль
						</div>
					</nav>

					<Button title='Связаться с нами' />
				</div>
			</header>

		</div>
	)
}

export default Header