var app = angular.module('signatureConstructor', []);

var officeSelect = false;
var departmentSelect = false;


app.config( ['$compileProvider',function( $compileProvider )
  {   
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|skype):/);
  }
])

.controller('generator', function ($scope){

	$scope.locations = [
		{name: 'Kiev, Amosova', address: '<b>Ciklum</b><br>12 Amosova St. 03141, Kyiv, Ukraine'},
		{name: 'Kiev, Gulliver', address: '<b>Ciklum</b><br>1a Sportyvna sq. 01023, Kyiv, Ukraine'},
    {name: 'Odessa', address: '<b>Ciklum</b><br>Lekha Kachyns\'koho St, 7., BC “Rialto”, Odessa'},
    {name: 'Kharkiv', address: '<b>Ciklum</b><br>18-D, Otakara Yarosha St., 3-rd floor, Kharkiv 61045'},
    {name: 'Dnipropetrovsk', address: '<b>Ciklum</b><br>15-A, Barykadna St., Dnipropetrovsk 49000'},
    {name: 'Vinnitsa', address: '<b>Ciklum</b><br>24, Soborna St., “Sky Park”, Office 4.218, 3th floor, Vynnytsa, 21050'},
    {name: 'Lviv', address: '<b>Ciklum</b><br>BC “Legenda Class“, 9th floor, 111А Shevchenka St., Lviv, 79039'},
    {name: 'Minsk', address: '<b>Ciklum</b><br>42 Kalvariyskaya St., BC "Kaskad Alfa", 4th floor, Minsk, Belarus'},
    {name: 'London', address: '<b>Ciklum</b><br>Ciklum UK Ltd., 22 Long Acre, London, WC2E 9LY, UK'},
    {name: 'Copenhagen', address: '<b>Ciklum</b><br>Østerbrogade 125, 3rd floor, DK 2100 Copenhagen Ø'},
    {name: 'Tel Aviv', address: '<b>Ciklum</b><br>24 Raoul Wallenberg, Tel Aviv, Israel'},
    {name: 'Lahore', address: '<b>Ciklum</b><br>7cl, 2-nd floor, Civic Center, Faisal Town'},
    {name: 'Islamabad', address: '<b>Ciklum</b><br>2nd floor, Evacuee Trust Plaza F-5/1, Islamabad, Pakistan'},
    {name: 'Zürich', address: '<b>Ciklum</b><br>Technoparkstrasse 1, 8005 Zürich'},
    {name: 'New York', address: '<b>Ciklum</b><br>420 Lexington Ave., Suit 300, New York, NY 10170'},
    {name: 'Boston', address: '<b>Ciklum</b><br>470 Atlantic Ave, 4th Floor, Boston, MA 02210'},
    {name: 'Wrocław', address: '<b>Ciklum</b><br>Sky Tower, Szczęśliwa 33, 53-332'},
    {name: 'Gdansk', address: '<b>Ciklum</b><br>Tryton Business House, Jana z Kolna 11'},
    {name: 'Malaga', address: '<b>Ciklum</b><br>Severo Ochoa 5, PTA, Málaga, Spain'}
	];

	$scope.departments = [
		{name: 'Ciklum Corporate', logoUrl: 'http://ciklum.com/email-signature/img/ciklum-services/ciklum-corporate.png', slogan: ''},
		/*{name: 'Ciklum Consulting', logoUrl: 'http://ciklum.com/email-signature/img/ciklum-services/ciklum_consulting_logo.png'},
    {name: 'Ciklum Services', logoUrl: 'http://ciklum.com/email-signature/img/ciklum-services/ciklum_services_logo.png'},
    {name: 'Ciklum Solutions', logoUrl: 'http://ciklum.com/email-signature/img/ciklum-services/ciklum_solutions_logo.png'},
    {name: 'Ciklum Technology', logoUrl: 'http://ciklum.com/email-signature/img/ciklum-services/ciklum_technology_logo.png'},*/
    {name: 'Ciklum Travel', logoUrl: 'http://ciklum.com/email-signature/img/ciklum-services/ciklum_travel_logo.png', slogan: 'AD takes care of you!'}
	];

  $scope.contacts = [
    {name: 'Mobile', signatureIcon: 'img/icons/cell_phone.png'},
    {name: 'Landline', signatureIcon: 'img/icons/landline.png'}
  ];

  $scope.setOffice = function(val){
    $scope.office = val;
    $(".office").html(val.name+' <span class="caret"></span>');
    $(".office").removeClass("required");
    officeSelect = true;
    shotCopyButton()
  };

  $scope.setDepartment = function(val){
    $scope.department = val;
    $(".department").html(val.name+' <span class="caret"></span>');
    $(".department").removeClass("required");
    departmentSelect = true;
    shotCopyButton()
  };

});

app.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);


$("#generate").click(function(){

  if( officeSelect && departmentSelect ){
    $(".signature-preview").addClass("done");
    $(".instruction").removeClass("not-done");
    $(".copy-btn").removeClass("not-visible")
  } else {
    $(".btn-default.dropdown-toggle").addClass("required");
  }

});

function shotCopyButton(){
  if( officeSelect && departmentSelect ) {
    $(".copy-btn").removeClass("not-visible")
  }
}



$(".owl-carousel").owlCarousel({
  items: 1,
  dots: false,
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  smartSpeed: 400
});

$("#go-generate").click(function(){
  $('.owl-carousel').trigger('next.owl.carousel');
});

$('.input-form').formValidation();



