//1. HTML:
/*
				<div class="carousel">	
					<div class="carousel-arrow-left"><span>Влево</span></div>
					<div class="carousel-hider">
						<ul class="carousel-list">
							<li class="carousel-element"><img><p>Описание 1</p></li>
							<li class="carousel-element"><img><p>Описание 2</p></li>
							.
							.
							.
							.
							<li class="carousel-element"><img><p>Описание N-1</p></li>
							<li class="carousel-element"><img><p>Описание N</p></li>
						</ul>
					</div>
					<div class="carousel-arrow-right"><span>Вправо</span></div>
				</div>
*/

// 2. CSS:
/*
				.carousel-hider {
				    overflow: hidden;
				    float: left;
				    background-color: lightblue;
				}
				 
				.carousel-list {    
				    list-style: none;
				    padding: 0;
				    position: relative;
				    background-color: blue;
				}
				 
				.carousel-element {
				    display: block;
				    float: left;
				}
				 
				.carousel-arrow-left, .carousel-arrow-right {
				    float: left;
				    display: block;
				    border: 1px solid grey;
				    background-color: lightgrey;
				    padding: 5px;
				    margin-top: 50px;
				}

				.carousel-arrow-left:hover, .carousel-arrow-right:hover {
				    cursor: pointer;
				    background-color: grey;
				}
				 
				.carousel-arrow-left {
				    margin-right: 25px;
				}
				 
				.carousel-arrow-right {
				    margin-left: 25px;
				}
*/

// 3. JS (значения полей задаются вручную):

$(document).ready(function () {
    $('.carousel').carouselPlugin({
        carouselWidth: 1000, // ширина видимой части карусели в пикселях
        itemNumberInWindow: 5, // количество снимков в видимой части карусели
        itemMarginRight: 25, // боковые отступы между снимками в пикселях
        animateDuration: 500 //время перелистывания в мс
    })
});


$(document).ready(function () {
	
	var profile = {
		name: 'Смирнов Антон Сергеевич',
		photo: 'img/face.jpg',
		about: 'Инженер-эксперт в одной очень важной организации при очень важном строительном институте'
	};

	var template = $('#tmpl').html();
	var content = tmpl(template, profile);
	
	$('#wrapper').append(content);
});