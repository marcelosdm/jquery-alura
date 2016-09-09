		var atualizaDados = function(){
			var itens = $(".item-total");
			var total = 0;
			for(var i = 0; i < itens.length; i++){
				var item = $(itens[i]);
				var preco = parseFloat(item.text());
				total = total + preco;
			}
			$("#valor-total").text(total);
			$("#quantidade-de-itens").text(itens.length);
		};

		var removeItem = function(event){
			event.preventDefault();
			
			var self = $(this);
			self.closest("tr").hide();
			atualizaDados();

			var undo = function(){
				var trs = $('tr:hidden');
				trs.show();
			}
		};

		var aposInicializado = function(){
			$(".remove-item").click(removeItem);
			atualizaDados();
			$("#undo").click(undo);
		}

		$(aposInicializado);
