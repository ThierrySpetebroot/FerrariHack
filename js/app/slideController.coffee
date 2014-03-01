define ['data/source', 'cityView', 'situationView', 'lib/jquery'], (data, cityView, situationView, $) ->
	currentSectionIndex = 0
	currentCityIndex = 0
	currentSituationIndex = 0

	@setCity = (city) ->
		cityView.template(city)		
		situationView.template(city)
		return

	# leave section handler
	@onSectionLeave = (index, direction) ->
		if(direction == 'down')
			currentSectionIndex++

			switch index
				when 2 then @setCity(data[currentCityIndex]) # imposta città selezionata

		if(direction == 'up')
			currentSectionIndex--

		return

	@onSlideLeave = (anchorLink, index, slideIndex, direction) ->
		if(currentSectionIndex == 1) # city slider
			if direction == "right"
				currentCityIndex++;
			if direction == "left"
				currentCityIndex--
		
		currentCityIndex = currentCityIndex % data.length
		return

	return @
