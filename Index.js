	const producto = [

		{
		id: 1,
		nombre: "mesa",
		precio: 80000
		 

		},
		{
		id: 2,
		nombre:"enrrique",
		precio: 20000
		},
		 	
		{
		id: 3,
		nombre:"ramiro",
		precio: 40000
		}



	];

	let contadorCarrito = 0;
	const carrito = [];

	const ProductoCatalogoHTML = (producto) => {
	const text = '<div class="col"> 
			<div class="card" style="width: 18rem;">
  		   		<img src="https://jsonplaceholder.typicode.com/${producto.id}" class="card-img-top" alt="...">
  		   		<div class="card-body">
    		      		<h5 class="card-title">Card title</h5>
    		      			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    				<button href="#" class="btn btn-primary">Go somewhere</a>
  		   		</div>
			  </div>
	   	      </div>';
	};
	const ProductosCarritoHTML = (producto) => "";
	
	const MostrarCatalogo = () => {}:
	const MostrarCarrito = () => {};

	const BotonesCatalogo = () => {};
	const BotonesCarrito = () => {};

	MostrarCatalogo();


