define ['lib/jquery'], ($) ->
	view = template: (situation) ->
		$('#situation-intro').html("<h1>#{situation.description}</h1>")
	return view