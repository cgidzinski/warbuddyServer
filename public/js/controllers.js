myApp.controller('InterestController', function($scope) {
  $scope.titleSubtext="Supposibly I enjoy this trash..."
  $scope.interests = [
  				   {"name":"Electronics", "description":"I LOVE to take things apart and build stuff. Self taught from an early age and always wanting to learn more. Robots to Alarm systems to Spy gadgets."},
                   {"name":"Programming", "description":"Theres always somthing that can be improved in applications these days. This is why in my free time you can find me building interesting applications for Mobile,Web and Desktop."},
                   {"name":"Warhammer", "description":"FOR THE EMPEROR! Few things get you thinking like commanding an army. The races I play are the Necrons in Warhammer40K and the Skaven in Warhammer Fantasy."},
                   {"name":"Magic", "description":"Its all about the Swamps. Avid player of magic with allegience only to the powerfull life draining spells of Mono Black Decks."},
                   {"name":"Airsoft", "description":"Nothing says exercise and team-building like carrying 40lbs of gear and running for hours on end. All this while being flanked or shot at by the opposing team or even mother nature."}];
});

myApp.controller('AboutController', function($scope) {
	$scope.descriptionTitle="Colin Gidzinski"
	$scope.image="http://placehold.it/750x450"
	$scope.description="Heyo, I'm Colin Gidzinski! Im currently in my 3rd year of Univeristy at Wilfrid Laurier University."
  $scope.friends = [
  				   {"name":"DenoSaauur", "company":"Lyninx inc." ,"description":"Herp Derp.","website":"http://www.google.ca","image":"http://placehold.it/750x450"},
                   {"name":"Tobeans","company":"BadApps inc.", "description":"Hey Baus","website":"http://www.google.ca","image":"http://placehold.it/750x450"},
                   {"name":"NoBody","company":"Somtin inc.", "description":"montindeeew","website":"http://www.google.ca","image":"http://placehold.it/750x450"}
                   ];
});

myApp.controller('HardwareController', function($scope) {
	$scope.title="Hardware"
		$scope.titleSubtext="Heyo robots"
  $scope.projects = [
  				   {"name":"Prohect 1", "date":"May 24, 2013" ,"description":"sdfsdfsdfsdf","id":"0","image":"http://placehold.it/600x300"},
                   {"name":"electonic thing","date":"May 24, 2013", "description":"ergsergserger","id":"2","image":"http://placehold.it/600x300"}
                   ];
});

myApp.controller('SoftwareController', function($scope) {
	$scope.title="Software"
		$scope.titleSubtext="Heyo bugs"
  $scope.projects = [
  				         {"name":"some program", "date":"May 24, 2013" ,"description":"sdfsdfsdfsdf","id":"0","image":"http://placehold.it/600x300"},
                   {"name":"calculation software","date":"May 24, 2013", "description":"ergsergserger","id":"2","image":"http://placehold.it/600x300"}
                   ];
});

myApp.controller('Project_Item', function($scope, $stateParams) {
//Get variables from previous page routed parameters
    var id = $stateParams.id;

if (id==0){

  $scope.title="Project Name 0"
  $scope.date="August 24, 2013 at 9:00 PM "
  $scope.titleSubtext="It Beeps"
  $scope.image="http://placehold.it/900x300"
  $scope.quickDescription="Some quick Desc"
  $scope.mainText="Dis how i built"
 
 $scope.links = [
                {"text":"some url","url":"http://placehold.it/600x300"},
                    {"text":"some other url","url":"http://placehold.it/600x300"},
          {"text":"once again","url":"http://placehold.it/600x300"}
                  ];

}
else if (id==1){

 $scope.title="Project Name 1"
  $scope.date="August 24, 2013 at 9:00 PM "
  $scope.titleSubtext="It Beeps"
  $scope.image="http://placehold.it/900x300"
  $scope.quickDescription="Some quick Desc"
  $scope.mainText="Dis how i built"
 
 $scope.links = [
                {"text":"some url","url":"http://placehold.it/600x300"},
                    {"text":"some other url","url":"http://placehold.it/600x300"},
          {"text":"once again","url":"http://placehold.it/600x300"}
                  ];

}
else if (id==2){

 $scope.title="Project Name 2"
  $scope.date="August 24, 2013 at 9:00 PM "
  $scope.titleSubtext="It Beeps"
  $scope.image="http://placehold.it/900x300"
  $scope.quickDescription="Some quick Desc"
  $scope.mainText="Dis how i built"
 
 $scope.links = [
                {"text":"some url","url":"http://placehold.it/600x300"},
                    {"text":"some other url","url":"http://placehold.it/600x300"},
          {"text":"once again","url":"http://placehold.it/600x300"}
                  ];

}
else if (id==3){

 $scope.title="Project Name 3"
  $scope.date="August 24, 2013 at 9:00 PM "
  $scope.titleSubtext="It Beeps"
  $scope.image="http://placehold.it/900x300"
  $scope.quickDescription="Some quick Desc"
  $scope.mainText="Dis how i built"
 
 $scope.links = [
                {"text":"some url","url":"http://placehold.it/600x300"},
                    {"text":"some other url","url":"http://placehold.it/600x300"},
          {"text":"once again","url":"http://placehold.it/600x300"}
                  ];

}






});