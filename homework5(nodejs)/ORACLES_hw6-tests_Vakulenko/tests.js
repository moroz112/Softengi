describe("Тестирование функции parseAddress", function(){

	it("Тестирование корректных адресов", function(){


		//expect(func.parseAddress("02068, г. Киев, ул. Анны Ахматовой, д. 14б")).toBe(func.parseAddress("02068, г. Киев, ул. Анны Ахматовой, д. 14б"));
		//expect(func.parseAddress("02068, g. Kiev, ul. Anny Ahmatovoj, d. 14b")).toBe(func.parseAddress("02068, g. Kiev, ul. Anny Ahmatovoj, d. 14b"));

		expect(func.parseAddress("02068, g. Kiev, ul. Anny Ahmatovoj, d. 14b")).toEqual(func.parseAddress("02068, g. Kiev, ul. Anny Ahmatovoj, d. 14b"));
		expect(func.parseAddress("02068, г. Киев, ул. Анны Ахматовой, д. 14б")).toEqual(func.parseAddress("02068, г. Киев, ул. Анны Ахматовой, д. 14б"));


		expect(func.parseAddress("02068, г. Киев, ул. Анны Ахматовой, д. 14б")).toEqual({
			index:"02068",
			city:"г. Киев",
			street:"ул. Анны Ахматовой",
			number:"д. 14б"});

		expect(func.parseAddress("98764, г. Полтава, ул. Шевченко, д. 13в")).toEqual({
			index:"98764",
			city:"г. Полтава",
			street:"ул. Шевченко",
			number:"д. 13в"});

		expect(func.parseAddress("35478, г. Харьков, ул. Полтавский путь, д. 145/5")).toEqual({
			index:"35478",
			city:"г. Харьков",
			street:"ул. Полтавский путь",
			number:"д. 145/5"});

		expect(func.parseAddress("78678, г. Одесса, ул. Арнаутская, д. 5")).toEqual({
			index:"78678",
			city:"г. Одесса",
			street:"ул. Арнаутская",
			number:"д. 5"});

		expect(func.parseAddress("89345, г. Луцк, ул. Ровенская, д. 76")).toEqual({
			index:"89345",
			city:"г. Луцк",
			street:"ул. Ровенская",
			number:"д. 76"});

		expect(func.parseAddress("01234, г. Днепропетровск, ул. Артёма, д. 145")).toEqual({
			index:"01234",
			city:"г. Днепропетровск",
			street:"ул. Артёма",
			number:"д. 145"});

		expect(func.parseAddress("09123, г. Бровары, ул. Короленка, д. 14б")).toEqual({
			index:"09123",
			city:"г. Бровары",
			street:"ул. Короленка",
			number:"д. 14б"});

	});


	it("Тестирование неполных адресов", function(){

		expect(func.parseAddress("г. Киев, ул. Анны Ахматовой, д. 14б")).toEqual({
			index:false,
			city:"г. Киев",
			street:"ул. Анны Ахматовой",
			number:"д. 14б"});

		expect(func.parseAddress("98764, , ул. Шевченко, д. 13в")).toEqual({
			index:"98764",
			city:false,
			street:"ул. Шевченко",
			number:"д. 13в"});

		expect(func.parseAddress("35478, г. Харьков, Полтавский путь, д. 145/5")).toEqual({
			index:"35478",
			city:"г. Харьков",
			street:false,
			number:"д. 145/5"});

		expect(func.parseAddress("78678, г. Одесса, ул. Арнаутская, д. ")).toEqual({
			index:"78678",
			city:"г. Одесса",
			street:"ул. Арнаутская",
			number:false});

		expect(func.parseAddress("89345,  Ровенская, д. 76")).toEqual({
			index:"89345",
			city:false,
			street:false,
			number:"д. 76"});

		expect(func.parseAddress(", г. Днепропетровск, ул. Артёма, ")).toEqual({
			index:false,
			city:"г. Днепропетровск",
			street:"ул. Артёма",
			number:false});

		expect(func.parseAddress("09123, г. , ул. Короленка, д. 14б")).toEqual({
			index:"09123",
			city:false,
			street:"ул. Короленка",
			number:"д. 14б"});

	});


	it("тестирование некорректных адресов, пример: 091ку, г. 89Бровары, ул. Короленка, д. ку", function(){

		expect(func.parseAddress("020ку, г. Горький-17, ул. Анны Ахматовой, д. 14б")).toEqual({
			index:false,
			city:"г. Горький-17",  // consider this valid
			street:"ул. Анны Ахматовой",
			number:"д. 14б"});

		expect(func.parseAddress("98764, г. 45Полтава, ул. Шевченко, д. 13в")).toEqual({
			index:"98764",
			city:false,
			street:"ул. Шевченко",
			number:"д. 13в"});

		expect(func.parseAddress("35478, г. Харьков, ул. Полтавский+путь, д. 145/5")).toEqual({
			index:"35478",
			city:"г. Харьков",
			street:false,
			number:"д. 145/5"});

		expect(func.parseAddress("78678, г. Одесса, ул. Арнаутская, д. ку")).toEqual({
			index:"78678",
			city:"г. Одесса",
			street:"ул. Арнаутская",
			number:false});

		expect(func.parseAddress("ree45, г. 89345fhf, ул. Ровенская, д. 76")).toEqual({
			index:false,
			city:false,
			street:"ул. Ровенская",
			number:"д. 76"});

		expect(func.parseAddress("fhfgh, г. 89345, ул. Артёма, д. rt")).toEqual({
			index:false,
			city:false,
			street:"ул. Артёма",
			number:false});

		expect(func.parseAddress("09dfg123, г. Б5, ул. , д. б")).toEqual({
			index:false,
			city:false,
			street:false,
			number:false});

	});

	it("Тестирование не строки", function(){

		expect(func.parseAddress(null)).toEqual({
			index:false,
			city:false,
			street:false,
			number:false});

		expect(func.parseAddress( {} )).toEqual({
			index:false,
			city:false,
			street:false,
			number:false});

		expect(func.parseAddress(999)).toEqual({
			index:false,
			city:false,
			street:false,
			number:false});

		expect(func.parseAddress( [] )).toEqual({
			index:false,
			city:false,
			street:false,
			number:false});

		expect(func.parseAddress( false )).toEqual({
			index:false,
			city:false,
			street:false,
			number:false});

	});


});

