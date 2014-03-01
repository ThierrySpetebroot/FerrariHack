define ['lib/jquery'], ($) ->
	view = template: (city) ->
		$('#city-intro').html("<h1>#{city.description}</h1>")

		for situation, i in city.situations
			$('#situations .situation-' + i).html("<h1>#{situation.description}</h1>")

		# TODO nascondi situation non richieste (se il numero è variabile)
	return view