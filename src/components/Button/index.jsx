function Button(props) {

	const { title } = props

	return (

		<button className="transition-transform	 hover:scale-150 bg-teal-400 px-4 py-2 rounded-lg text-base text-fuchsia-800 font-semibold shadow-md border border-solid border-color-fuchsia">
			{title}
		</button>
	)
}

export default Button