define ['data/source', 'cityView', 'situationView', 'lib/jquery'], (data, cityView, situationView, $) ->
	currentSectionIndex = 0
	currentCityIndex = 0
	currentSituationIndex = 0

	@setCity = (city) ->
		cityView.template(city)
		return

	@setSituation = (situation) ->
		situationView.template(situation)
		return

	# leave section handler
	@onSectionLeave = (index, direction) ->
		if(direction == 'down')
			currentSectionIndex++

			switch index
				when 2 then @setCity(data[currentCityIndex]) # imposta città selezionata
				when 4 then @setSituation(data[currentCityIndex].situations[currentSituationIndex]) # imposta città selezionata

		if(direction == 'up')
			currentSectionIndex--

		return

	@onSlideLeave = (anchorLink, index, slideIndex, direction) ->
		switch index
			when 2 # city slider
				if direction == "right"
					currentCityIndex++
				if direction == "left"
					currentCityIndex--
		
				currentCityIndex = currentCityIndex % data.length
			when 4 # situation slider
				if direction == "right"
					currentSituationIndex++
				if direction == "left"
					currentSituationIndex--
			
				currentSituationIndex = currentSituationIndex % data[currentCityIndex].situations.length
		return

	return @
