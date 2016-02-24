angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.name = 'Donald Guevara';
	
	vm.works = [
		{
			title: 'Cover Art',
			price: 50,
			picture: 'images/coverArt.jpg',
			likes: 0,
		},

		{
			title: 'Cover Art 2',
			price: 50,
			picture: 'images/coverArt2.jpg',
			likes: 0,
		},

		{
			title: 'Don 2',
			price: 35,
			picture: 'images/don2.jpg',
			likes: 0,
		},

		{
			title: 'Don',
			price: 30,
			picture: 'images/don.jpg',
			likes: 0,
		},

		{
			title: 'Weird Shape',
			price: 30,
			picture: 'images/weirdShape.jpg',
			likes: 0,
		},

		{
			title: 'Intricate',
			price: 30,
			picture: 'images/intricate.jpg',
			likes: 0,
		},

		{
			title: 'Intricate 2',
			price: 45,
			picture: 'images/intricate2.jpg',
			likes: 0,
		},

		{
			title: 'Mickey',
			price: 45,
			picture: 'images/mickey.jpg',
			likes: 0,
		},

		{
			title: 'Sonic',
			price: 45,
			picture: 'images/sonic.jpg',
			likes: 0,
		},

		{
			title: 'Shroom Hats',
			price: 30,
			picture: 'images/shroomHats.jpg',
			likes: 0,
		},

		{
			title: 'Waterfall',
			price: 50,
			picture: 'images/waterfall.jpg',
			likes: 0,
		},

		{
			title: 'Heart',
			price: 35,
			picture: 'images/heart.jpg',
			likes: 0,
		},
	];


	vm.plusOne = function(index) {
		vm.works[index].likes += 1;
	};



});