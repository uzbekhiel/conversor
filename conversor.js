function retornaValorMonetario(palavra){
		var retorno = "";
		var cont = 1;

		if (palavra.length != 0)
		{
			var found = palavra.indexOf(",");
			var temp = palavra.substring(0, found);
			for (var i = temp.length ; i >= 0; i--)
			{
				if (cont % 3 == 0 && i != 0)
				{
					retorno = temp.substring(i-1,i) + retorno;
					if(temp.substring(i-2, i-1) != ""){ if(temp.substring(i-2, i-1) != "-") retorno = "." + retorno;}
				}
				else
				{
					retorno = temp.substring(i-1,i) + retorno;
				}
				cont++;
			}
			return "R$ " + retorno + palavra.substring(palavra.length - 3);
		}
		else
		{
			return palavra;
		}
	}
	
	function retornaValorCpf(palavra){
		var retorno = "";
		var cont = 1;

		if (palavra.length != 0)
		{
			var temp = palavra.substring(0, 9);
			for (var i = temp.length; i >= 0; i--)
			{
				if (cont % 3 == 0 && i != 0 && temp.substring(i-2, i-1) != " ")
				{
					retorno = temp.substring(i-1,i) + retorno;
					if(temp.substring(i-2, i-1) != ""){ retorno = "." + retorno;}
				}
				else
				{
					retorno = temp.substring(i-1,i) + retorno;
				}
				cont++;
			}
			return retorno + "-" + palavra.substring(palavra.length - 2);
		}
		else
		{
			return palavra;
		}
	}
